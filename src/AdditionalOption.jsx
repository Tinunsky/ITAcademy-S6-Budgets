import { useContext } from "react";
import { BudgetContext } from "./pages/Calculator";

export function AdditionalOption({
  name,
  amount,
  productOptionsIndex,
  additionalOptionIndex,
  price,
}) {
  const { handleAmount } = useContext(BudgetContext);

  const circleButtonStyle = {
    width: "20px",
    height: "15px",
    borderRadius: "80px",
    padding: "0px",
    fontSize: "9px",
  };

  return (
    <div className="container p-0">
      <div
        className="row align-items-center justify-content-end"
        style={{ maxWidth: "670px" }}
      >
        <div className="col-auto pl-5" style={{ fontSize: "13px" }}>
          {name} ( x {price}€ )
        </div>
        <div className="col-auto p-1">
          <button
            className="btn border"
            style={circleButtonStyle}
            onClick={() =>
              handleAmount(-1, productOptionsIndex, additionalOptionIndex)
            }
          >
            ﹣
          </button>
        </div>
        <div className="col-auto p-0">
          <input
            type="number"
            className="form-control"
            style={{
              width: "35px",
              fontSize: "11px",
              height: "25px",
              appearance: "textfield",
            }}
            value={amount}
          />
        </div>
        <div className="col-auto p-1">
          <button
            className="btn border"
            style={circleButtonStyle}
            onClick={() =>
              handleAmount(1, productOptionsIndex, additionalOptionIndex)
            }
          >
            ﹢
          </button>
        </div>
      </div>
    </div>
  );
}
