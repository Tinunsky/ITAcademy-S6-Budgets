import { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
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
          name: "web pages",
          price: 30,
          amount: 1,
        },
        {
          name: "languages",
          price: 30,
          amount: 1,
        },
      ],
    },
  ];

  const [productOptions, setProductOptions] = useState(initialProductOptions);
  const [budget, setBudget] = useState(0)

  function handleCheck(i) {
    const productOptionsResult = [...productOptions];
    productOptionsResult[i].isChecked = !productOptionsResult[i].isChecked;
    setProductOptions(productOptionsResult);
  }

  function handleAmount(number, productOptionsIndex, additionalOptionIndex) {
    const productOptionsResult = [...productOptions];
    const amount =
      productOptionsResult[productOptionsIndex].additionalOptions[
        additionalOptionIndex
      ].amount;
    if ((amount > 0 || number > 0) && (amount > 1 || number > -1)) {

      productOptionsResult[productOptionsIndex].additionalOptions[
        additionalOptionIndex
      ].amount += number;
      setProductOptions(productOptionsResult);
    }
  }

  return (
    <BudgetContext.Provider
      value={{ handleCheck, productOptions, handleAmount, budget, setBudget }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

