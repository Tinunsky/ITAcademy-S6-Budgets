import { useState } from "react";
import { ProductOption } from "./ProductOption";

export default function App() {
  const initialProductOptions = [
    {
      description: "Make an SEO campaign",
      price: 300,
      ischecked: false,
    },
    {
      description: "Run an advertising campaign",
      price: 400,
      ischecked: false,
    },
    {
      description: "Make a website",
      price: 500,
      ischecked: false,
    },
  ];

  const [productOptions, setProductOptions] = useState(initialProductOptions);

  function handleCheck(i) {
    const productOptionsResult = [...productOptions];
    productOptionsResult[i].ischecked = !productOptionsResult[i].ischecked
    setProductOptions(productOptionsResult)
  }

  let budget = 0;
  productOptions.forEach((productOption) => {
    if (productOption.ischecked === true) {
      budget += productOption.price;
    }
  });

  return (
    <>
      <div>
        {productOptions.map((element, i) => (
          <ProductOption
            key={i}
            option={element}
            checkToggler={() => handleCheck(i)}
          />
        ))}
      </div>
      <div>Tu presupuesto: {budget}</div>
    </>
  );
}
