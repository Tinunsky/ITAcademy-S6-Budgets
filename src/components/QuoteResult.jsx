import { useContext } from "react";
import { QuotesContext } from "../contexts/QuotesProvider";

export function QuoteResult() {
  const { clientQuotes } = useContext(QuotesContext);

  return (
    <>
      {clientQuotes.length === 0 ? (
        <>
          <div className="fw-bolder pt-5 pb-5" style={{ fontSize: "1.4em" }}>
            No pending quotes
          </div>
        </>
      ) : (
        <>
          <div className="fw-bolder pt-5" style={{ fontSize: "1.4em" }}>
            Pending quotes:
          </div>
        </>
      )}
      {clientQuotes.map((clientQuote, i) => {
        return (
          <div
            className="container mt-5 mb-5 shadow pt-4 pb-3"
            style={{ borderRadius: "20px" }}
            key={i}
          >
            <div className="row mt-2 align-items-center">
              <div className="col-sm-5">
                <div className="text-start fs-5 fw-bolder">
                  {clientQuote.name}
                </div>
                <div>{clientQuote.email}</div>
                <div>{clientQuote.phone}</div>
              </div>
              <div className="col-sm-5">
                <div style={{ fontWeight: "bold" }}>Services contracted:</div>
                {clientQuote.services?.map((service, i) => {
                  return (
                    <div style={{ fontSize: "0.9em" }} key={`service ${i}`}>
                      - {service}
                    </div>
                  );
                })}
              </div>
              <div className="col-sm-2">
                <div>Total:</div>
                <div style={{ fontSize: "2.1em", fontWeight: "bold" }}>
                  {clientQuote.finalQuote}€
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
