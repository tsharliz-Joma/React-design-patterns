import styled from "styled-components";
import { useResource } from "../../hooks/useResource";

const ProductContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductName = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #e91e63;
  margin-bottom: 16px;
`;

const ProductDescriptionTitle = styled.h4`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 16px;
`;

const ProductRating = styled.p`
  font-size: 1em;
  color: #ff9800;
`;

export const ProductInfo = ({ productId }) => {
  const product = useResource(`/api/products/${productId}`);
  const { name, price, description, rating } = product || [];

  return (
    <ProductContainer>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
      <ProductDescriptionTitle>Description:</ProductDescriptionTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductRating>Average Rating: {rating}</ProductRating>
    </ProductContainer>
  );
};
