export const ProductInfo = ({ product }) => {
  const { id, name, price, description, rating } = product || {};

  return (
    <>
      {product ? (
        <>
          <h3>{name}</h3>
          <p>Price: {price}</p>
          <p>Description: {description}</p>
          <p>Rating: {rating}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
