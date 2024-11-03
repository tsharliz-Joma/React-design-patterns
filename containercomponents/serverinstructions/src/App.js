import { ResourceLoader } from "./components/resourceLoader/ResourceLoader";
import { UserLoader } from "./components/userloader/UserLoader";
import { UserInfo } from "./components/user/UserInfo";

function App() {
  return (
    <>
      <UserLoader userId="456">
        <UserInfo />
      </UserLoader>
      <ResourceLoader resourceUrl={`/users/789`} resourceName={`user`}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader>
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
