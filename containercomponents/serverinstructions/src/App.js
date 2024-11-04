import { UserInfo } from "./components/user/UserInfo";
import { DataSource } from "./DataSource";
import axios from "axios";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};
const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => {
  return <h2>{message}</h2>;
};

function App() {
  return (
    <>
      <DataSource getDataFunc={getServerData("/users/456")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource getDataFunc={getLocalStorageData("message")} resourceName={"message"}>
        <Text />
      </DataSource>
    </>
  );
}

export default App;
