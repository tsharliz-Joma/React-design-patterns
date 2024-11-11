import React from "react";
import { RecursiveComponent } from "./components/recursiveComponent/RecursiveComponent";
import { DangerButton, BigSuccessButton } from "./components/composition/Composition";
import { SecondaryDangerButton, SecondarySuccessButton } from "./hoc/partiallyApplied";
import { Container, Title } from "./style";
// Nested structure of the object is given below.
const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <Container>
      <Title>My App</Title>
      <RecursiveComponent data={nestedObject} />
      <DangerButton text="Danger" />
      <BigSuccessButton text="Success" />
      <SecondaryDangerButton text="Secoondary Danger" />
      <SecondarySuccessButton text="Secondary Success" />
    </Container>
  );
}

export default App;
