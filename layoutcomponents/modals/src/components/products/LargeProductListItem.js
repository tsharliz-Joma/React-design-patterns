export const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;

  return (
    <li>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </li>
  );
};
