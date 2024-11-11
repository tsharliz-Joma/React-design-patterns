import styled from "styled-components";
import { useDataSource } from "../../hooks/useDataSource";
import axios from "axios";

const ColorfulProductContainer = styled.div`
  background-color: #ffeb3b;
  border: 2px solid #ff9800;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

const ColorfulProductName = styled.h3`
  font-size: 1.8em;
  color: #d32f2f;
  margin-bottom: 10px;
`;

const ColorfulProductPrice = styled.p`
  font-size: 1.4em;
  color: #8e24aa;
  margin-bottom: 18px;
`;

const ColorfulProductDescriptionTitle = styled.h4`
  font-size: 1.4em;
  color: #1976d2;
  margin-bottom: 10px;
`;

const ColorfulProductDescription = styled.p`
  font-size: 1.2em;
  color: #388e3c;
  margin-bottom: 18px;
`;

const ColorfulProductRating = styled.p`
  font-size: 1.2em;
  color: #fbc02d;
`;

const serverResource = (resourceURL) => async () => {
  const response = await axios.get(resourceURL);
  return response.data;
};

const localResource = (key) => () => {
  return localStorage.getItem(key);
};

export const ResourceInfo = ({ productId }) => {
  // This variable uses the custom useDataSource hook to fetch the data from the API
  const product = useDataSource(serverResource(`/api/products/${productId}`));
  const localMessage = useDataSource(localResource("message"));

  const { name, price, description, rating } = product || {};

  return (
    <ColorfulProductContainer>
      <ColorfulProductName>{name}</ColorfulProductName>
      <ColorfulProductPrice>{price}</ColorfulProductPrice>
      <ColorfulProductDescriptionTitle>Description:</ColorfulProductDescriptionTitle>
      <ColorfulProductDescription>{description}</ColorfulProductDescription>
      <ColorfulProductRating>Average Rating: {rating}</ColorfulProductRating>
    </ColorfulProductContainer>
  );
};
