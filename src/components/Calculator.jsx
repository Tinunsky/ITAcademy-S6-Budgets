import { ProductOption } from "./ProductOption";
import { BudgetContext } from "../contexts/BudgetProvider";
import { useContext, useEffect  } from "react";

export function Calculator() {
  const { productOptions, setBudget } = useContext(BudgetContext);

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

  useEffect(() => {
    setBudget(budget);
  }, [budget, setBudget]);

  return (
    <>
      <div>
        {productOptions.map((element, i) => (
          <ProductOption key={`product ${i}`} option={element} index={i} />
        ))}
      </div>
      <div
        className="container"
        style={{
          fontWeight: "bold",
          marginTop: "50px",
          marginBottom: "100px",
        }}
      >
        <div className="row align-items-center justify-content-end">
          <div className="col-auto" style={{ fontSize: "1.7em" }}>
            Your budget:
          </div>
          <div className="col-auto" style={{ fontSize: "2.1em" }}>
            {budget}€
          </div>
        </div>
      </div>
    </>
  );
}
