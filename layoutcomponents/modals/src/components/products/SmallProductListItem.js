export const SmallProductListItem = ({ product }) => {
  const { name, price } = product;

  return (
    <li>
      {name} - {price}
    </li>
  );
};
