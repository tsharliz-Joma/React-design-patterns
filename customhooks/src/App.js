import { CurrentUserInfo } from "./components/currentUserInfo/currentUserInfo";
import { ProductInfo } from "./components/productInfo/ProductInfo";
import { ResourceInfo } from "./components/resourceInfo/ResourceInfo";
import { UserInfo } from "./components/userInfo/UserInfo";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 600px) 1fr;
  padding: 16px;
`;

const MiddleColumn = styled.div`
  grid-column: 2;
`;

function App() {
  return (
    <AppContainer>
      <MiddleColumn>
        <CurrentUserInfo />
        <UserInfo userId={"123"} />
        <ProductInfo productId={'1234'} />
        <ResourceInfo productId={'2345'} />
      </MiddleColumn>
    </AppContainer>
  );
}

export default App;
