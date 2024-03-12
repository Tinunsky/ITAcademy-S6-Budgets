import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <div className="welcome-container">
      <div>
        <h1 className="welcome-title">
          Welcome to Our Budget Website Calculator!
        </h1>
        <p className="welcome-text">
          This website is designed to help you streamline the calculations for
          your website budget. You can interact with checkboxes, input fields,
          and buttons to adjust the total price based on your selections.
        </p>
      </div>
      <div className="button-container">
        <Link to="/calculator">
          <button className="router-button">Go to calculator</button>
        </Link>
      </div>
    </div>
  );
}