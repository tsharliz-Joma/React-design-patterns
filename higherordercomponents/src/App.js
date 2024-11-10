import axios from "axios";
import { printProps } from "./HOC/printProps/printProps";
import { UserInfo } from "./components/user/UserInfo";
import { withUser } from "./HOC/withUser/withUser";
import { UserInfoForm } from "./components/forms/UserInfoForm";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-column-start: 2;
`;

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "234");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <UserInfoWrapped a={1} b="Hello" c={{ name: "John" }} />
        <UserInfoWithLoader date='hello world' />
        {/* This is also a HOC it just defined in another file because it is more complicated */}
        <UserInfoForm user='234' />
      </Container>
    </ThemeProvider>
  );
}

export default App;
