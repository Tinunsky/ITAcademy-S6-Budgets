import { useContext } from "react";
import { AdditionalOption } from "./AdditionalOption";
import { BudgetContext } from "./pages/Calculator";

export function ProductOption({ option, index }) {
  const { handleCheck } = useContext(BudgetContext);
  const { description, price, isChecked, additionalOptions } = option;

  return (
    <div className="d-flex justify-content-center align-items-center">
    <div
      className="container m-2 p-3 border shadow"
      style={{ maxWidth: "700px", minHeight: "120px", borderRadius: "20px" }}
    >
      <div className="row pt-3 align-items-center">
        <div className="col-sm-6 text-start fs-5 fw-medium">{description}</div>
        <div className="col-sm-4 text-center fs-4 fw-bolder ">{price}€</div>
        <div className="col-sm-2 text-center d-flex justify-content-around align-items-center">
          <input
            type="checkbox"
            value={isChecked}
            onClick={() => handleCheck(index)}
          />
          <div className="fst-italic">Add</div>
        </div>
        {isChecked && (
          <div className="mt-5">
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
    </div>
  );
}
