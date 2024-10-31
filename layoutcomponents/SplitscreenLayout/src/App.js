import { SplitScreen } from "./components/SplitScreen/SplitScreen";

// Component
const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};
// Component
const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "pink" }}>{message}</h1>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Charles" /> <RightHandComponent message="Hello World" />
    </SplitScreen>
  );
}

export default App;
