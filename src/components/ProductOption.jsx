import { useContext } from "react";
import { AdditionalOption } from "./AdditionalOption";
import { BudgetContext } from "../contexts/BudgetProvider";

export function ProductOption({ option, index }) {
  const { handleCheck } = useContext(BudgetContext);
  const { description, price, isChecked, additionalOptions } = option;
  

  return (
    <div
      className="container mt-2 pt-4 shadow"
      style={{
        minHeight: "120px",
        borderRadius: "20px",
        border: isChecked === true ? "2px solid #52a5fe " : "",
      }}
    >
      <div className="row p-3">
        <div className="col-sm-6 text-start fs-5 fw-medium">{description}</div>
        <div className="col-sm-4 text-center fs-4 fw-bolder">{price}€</div>
        <div className="col-sm-2 text-center d-flex justify-content-around align-items-center">
          <input
            type="checkbox"
            value={isChecked}
            onClick={() => handleCheck(index)}
          />
          <div className="fst-italic">Add</div>
        </div>
        {isChecked && additionalOptions && (
          <div className="col mt-5">
            {additionalOptions?.map(
              (additionalOption, additionalOptionIndex) => (
                <AdditionalOption
                  key={additionalOptionIndex}
                  name={additionalOption.name}
                  amount={additionalOption.amount}
                  additionalOptionIndex={additionalOptionIndex}
                  productOptionsIndex={index}
                  price={additionalOption.price}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
