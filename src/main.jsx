import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { BudgetProvider } from "./contexts/BudgetProvider.jsx";
import { QuotesProvider } from "./contexts/QuotesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BudgetProvider>
      <QuotesProvider>
        <RouterProvider router={router} />
      </QuotesProvider>
    </BudgetProvider>
  </React.StrictMode>
);
