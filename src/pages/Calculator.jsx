import { createContext, useState } from "react";
import { ProductOption } from "../ProductOption";
import { Link } from "react-router-dom";

export const BudgetContext = createContext();

export function Calculator() {
  const initialProductOptions = [
    {
      description: "Make an SEO campaign",
      price: 300,
      isChecked: false,
    },
    {
      description: "Run an advertising campaign",
      price: 400,
      isChecked: false,
    },
    {
      description: "Make a website",
      price: 500,
      isChecked: false,
      additionalOptions: [
        {
          name: "number of web pages",
          price: 30,
          amount: 1,
        },
        {
          name: "number of languages",
          price: 30,
          amount: 1,
        },
      ],
    },
  ];

  const [productOptions, setProductOptions] = useState(initialProductOptions);

  function handleCheck(i) {
    const productOptionsResult = [...productOptions];
    productOptionsResult[i].isChecked = !productOptionsResult[i].isChecked;
    setProductOptions(productOptionsResult);
  }

  // function handleAmount(number, productOptionsIndex, additionalOptionIndex) {
  //   const productOptionsResult = [...productOptions];
  //   const amount =
  //     productOptionsResult[productOptionsIndex].additionalOptions[
  //       additionalOptionIndex
  //     ].amount;
  //   if (amount > 0 || number > -1) {
  //     productOptionsResult[productOptionsIndex].additionalOptions[
  //       additionalOptionIndex
  //     ].amount += number;
  //     setProductOptions(productOptionsResult);
  //   }
  // }

  function handleAmount(number, productOptionsIndex, additionalOptionIndex) {
    const productOptionsResult = [...productOptions];
    const amount =
      productOptionsResult[productOptionsIndex].additionalOptions[
        additionalOptionIndex
      ].amount;
    if ((amount > 0 || number > 0) && (amount > 1 || number > -1)) {
      // Check if the amount is already 1 before allowing a decrease
      productOptionsResult[productOptionsIndex].additionalOptions[
        additionalOptionIndex
      ].amount += number;
      setProductOptions(productOptionsResult);
    }
  }

  let budget = 0;
  productOptions.forEach((productOption) => {
    if (productOption.isChecked === true) {
      budget += productOption.price;
      if (productOption.additionalOptions) {
        productOption.additionalOptions.forEach((additionalOption) => {
          const additionalCost =
            additionalOption.amount * additionalOption.price;
          budget += additionalCost;
        });
      }
    }
  });

  return (
    <BudgetContext.Provider
      value={{ handleCheck, productOptions, handleAmount }}
    >
      <div
        className="container text-center border m-5"
        style={{
          borderRadius: "20px",
          backgroundImage: "url('./src/assets/header_calculator.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: "0.9",
          width: "100%",
          maxHeight: "180px",
        }}
      >
        <span
          className="text"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "black",
            lineHeight: "180px",
            display: "inline-block",
          }}
        >
          Get the best budget
        </span>
      </div>
      <div>
        {productOptions.map((element, i) => (
          <ProductOption key={i} option={element} index={i} />
        ))}
      </div>
      <div
        className="container mt-5"
        style={{ maxWidth: "700px", fontWeight: "bold", margin: "0 auto" }}
      >
        <div className="row align-items-center justify-content-end">
          <div className="col-auto" style={{ fontSize: "20px" }}>
            Your budget:
          </div>
          <div className="col-auto" style={{ fontSize: "30px" }}>
            {budget}€
          </div>
        </div>
        <div className="row align-items-center justify-content-start">
          <Link to="/">
            <button className="router-button">Home</button>
          </Link>
        </div>
      </div>
    </BudgetContext.Provider>
  );
}
