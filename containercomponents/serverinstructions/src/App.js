import { UserInfo } from "./components/user/UserInfo";
import { DataSource } from "./DataSource";
import axios from "axios";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSource getDataFunc={getServerData("/users/456")} resourceName="user">
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
