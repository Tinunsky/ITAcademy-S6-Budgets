export function ProductOption({ option, checkToggler }) {
  const { description, price, isChecked } = option;
  return (
    <div>
      {description}
      {price}
      <input type="checkbox" value={isChecked} onClick = {checkToggler} />
    </div>
  );
}
