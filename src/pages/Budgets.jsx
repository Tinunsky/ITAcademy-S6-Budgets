import { Link } from "react-router-dom";
import { ClientForm } from "../components/ClientForm";
import { QuoteResult } from "../components/QuoteResult";
import { Calculator } from "../components/Calculator";
import { PATHS } from "../router";
import { Header } from "../components/Header";

export function Budgets() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: "700px", margin: "auto" }}>
        <Calculator />
        <ClientForm />
        <QuoteResult />
        <div className="button-container mb-5">
          <Link to={PATHS.ROOT}>
            <button className="router-button">Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}
