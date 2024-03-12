import { createBrowserRouter } from "react-router-dom";
import { Calculator } from "./pages/Calculator";
import { Welcome } from "./pages/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';


export const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/calculator", element: <Calculator />}
]
) 
