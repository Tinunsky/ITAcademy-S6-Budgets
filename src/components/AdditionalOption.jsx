import { useContext, useState } from "react";
import { BudgetContext } from "./../contexts/BudgetProvider";

export function AdditionalOption({
  name,
  amount,
  productOptionsIndex,
  additionalOptionIndex,
  price,
}) {
  const { handleAmount } = useContext(BudgetContext);
  const [showModal, setShowModal] = useState(false);

  const circleButtonStyle = {
    width: "20px",
    height: "15px",
    borderRadius: "80px",
    padding: "0px",
    fontSize: "0.75em",
    backgroundColor: "#cfe2ff",
  };

  return (
    <div className="container p-0">
      <div
        className="row align-items-center justify-content-end"
        style={{ maxWidth: "670px" }}
      >
        <div className="col-auto pl-5" style={{ fontSize: "0.95em" }}>
          <button
            className="btn m-1"
            style={circleButtonStyle}
            onClick={() => setShowModal(true)}
          >
            <i className="bi" style={{ fontSize: "0.8em" }}>
              ?
            </i>
          </button>
          {name}
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
              fontSize: "0.85em",
              height: "25px",
              appearance: "textfield",
            }}
            value={amount}
            readOnly
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

      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{
          display: showModal ? "block" : "none",
          backgroundColor: "rgba(207, 226, 255, 0.5)",
          position: "fixed",
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Help Message</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              Add as many {name} as you need for your project. Each one has an
              additional cost of {price}€.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
