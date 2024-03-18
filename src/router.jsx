import { createBrowserRouter } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Budgets } from "./pages/Budgets";

export const PATHS = {
  ROOT: "/",
  CALCULATOR: "/onlineCalculator",
};

export const router = createBrowserRouter([
  { path: PATHS.ROOT, element: <Welcome /> },
  { path: PATHS.CALCULATOR, element: <Budgets /> },
]);
