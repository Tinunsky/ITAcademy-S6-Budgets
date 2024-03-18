export function Header() {
  return (
    <div
      className="col text-center"
      style={{
        borderRadius: "20px",
        backgroundImage: "url('./src/assets/header_calculator.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        opacity: "0.9",
        maxHeight: "150px",
        margin: "20px",
        marginBottom: "50px",
      }}
    >
      <span
        className="text"
        style={{
          fontSize: "1.9em",
          fontWeight: "bold",
          color: "black",
          lineHeight: "180px",
          display: "inline-block",
        }}
      >
        Get the best budget quote
      </span>
    </div>
  );
}
