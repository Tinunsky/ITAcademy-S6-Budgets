import { useContext, useState } from "react";
import { QuotesContext } from "./../contexts/QuotesProvider";
import { BudgetContext } from "../contexts/BudgetProvider";

export function ClientForm() {
  const [nameForm, setNameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [phoneForm, setPhoneForm] = useState("");

  const { setClientQuotes } = useContext(QuotesContext);
  const { productOptions, budget } = useContext(BudgetContext);

  function handleSubmit(e) {
    e.preventDefault();
    let anyChecked = false;
    const checkedServicesAndAddionalOptionsNames = [];

    productOptions.forEach((option) => {
      if (option.isChecked) {
        anyChecked = true;

        let nameToPush = option.description;

        if (option.additionalOptions) {
          nameToPush += " ( ";
          option.additionalOptions.forEach((additionalOption, i) => {
            nameToPush += additionalOption.amount + " " + additionalOption.name;
            if (option.additionalOptions.length - 1 !== i) nameToPush += ", ";
          });
          nameToPush += ")";
        }

        checkedServicesAndAddionalOptionsNames.push(nameToPush);
      }
    });

    anyChecked &&
      (setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 50),
      setClientQuotes((currentClientQuotes) => {
        return [
          ...currentClientQuotes,
          {
            name: nameForm,
            email: emailForm,
            phone: phoneForm,
            services: checkedServicesAndAddionalOptionsNames,
            finalQuote: budget,
          },
        ];
      }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="new-quote-form container mt-5 mb-5 shadow pt-4 pb-3"
      style={{ borderRadius: "20px" }}
    >
      <div
        className="row text-center fw-bolder m-1"
        style={{ fontSize: "1.4em" }}
      >
        Ask for a quotation
      </div>
      <div className="row mt-2">
        <div className="col-sm-3">
          <input
            value={nameForm}
            onChange={(e) => setNameForm(e.target.value)}
            type="text"
            className="form-control mb-2 rounded"
            placeholder="Name"
            title="Please enter a valid name"
            required
          />
        </div>
        <div className="col-sm-3">
          <input
            value={phoneForm}
            onChange={(e) => setPhoneForm(e.target.value)}
            type="tel"
            className="form-control mb-2 rounded"
            placeholder="Phone"
            pattern="[0-9]{9}"
            title="Please enter a 6-digit number"
            required
          />
        </div>
        <div className="col-sm-3">
          <input
            value={emailForm}
            onChange={(e) => setEmailForm(e.target.value)}
            type="email"
            className="form-control mb-2 rounded"
            placeholder="Email"
            title="Please enter a valid email address"
            required
          />
        </div>
        <div className="col-sm-3 custom-font">
          <button className="btn btn-success rounded">Request a quote</button>
        </div>
      </div>
    </form>
  );
}
