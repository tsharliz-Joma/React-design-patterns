import { ResourceLoader } from "./components/resourceLoader/ResourceLoader";
import { UserLoader } from "./components/userloader/UserLoader";
import { UserInfo } from "./components/user/UserInfo";
import { DataSource } from "./DataSource";
import axios from "axios";

function App() {
  return (
    <>
      <DataSource
        getDataFunc={async () => {
          const response = await axios.get("/users/456");
          return response.data;
        }}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
