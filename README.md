# React-design-patterns

This repository contains various React design patterns implemented as separate projects. Each project demonstrates a specific pattern or set of patterns that can be used to build React applications.

## Projects

### 1. Split Screen Layout

This project demonstrates a split screen layout using styled-components.

- **Directory:** `layoutcomponents/splitscreenlayout`
- **Main Component:** `SplitScreen`
- **Usage:**

```jsx
import { SplitScreen } from "./components/SplitScreen/SplitScreen";

const LeftHandComponent = ({ name }) => <h1 style={{ backgroundColor: "green" }}>{name}</h1>;

const RightHandComponent = ({ message }) => <h1 style={{ backgroundColor: "pink" }}>{message}</h1>;

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Charles" />
      <RightHandComponent message="Hello World" />
    </SplitScreen>
  );
}

export default App;
```

### 2. Lists and List Items

This project demonstrates how to create reusable list components.

- **Directory:** `layoutcomponents/listsandlistitems`
- **Main Component:** `RegularList, NumberedList`
- **Usage:**

```jsx
import { RegularList } from "./RegularList";
import { NumberedList } from "./NumberedList";
import { LargePersonListItem, SmallPersonListItem } from "./components/people";
import { LargeProductListItem, SmallProductListItem } from "./components/products";

const people = [
  { name: "John Doe", age: 54, hairColor: "brown", hobbies: ["swimming", "bicycling", "video games"] },
  { name: "Brenda Smith", age: 33, hairColor: "black", hobbies: ["golf", "mathematics"] },
  { name: "Jane Garcia", age: 27, hairColor: "blonde", hobbies: ["biology", "medicine", "gymnastics"] },
];

const products = [
  { name: "Flat-Screen TV", price: "$300", description: "Huge LCD screen, a great deal", rating: 4.5 },
  { name: "Basketball", price: "$10", description: "Just like the pros use", rating: 3.8 },
  { name: "Running Shoes", price: "$120", description: "State-of-the-art technology for optimum running", rating: 4.2 },
];

function App() {
  return (
    <>
      <RegularList items={people} resourceName="person" ListItemComponent={LargePersonListItem} />
      <RegularList items={people} resourceName="person" ListItemComponent={SmallPersonListItem} />
      <NumberedList items={products} resourceName="product" ListItemComponent={LargeProductListItem} />
      <NumberedList items={products} resourceName="product" ListItemComponent={SmallProductListItem} />
    </>
  );
}
export default App;
```

### 3. Modals

This project demonstrates how to create reusable modal components.

- **Directory:** `layoutcomponents/modals`
- **Main Component:** `Modal, RegularList, NumberedList`
- **Usage:**

```jsx
import { RegularList } from "./RegularList";
import { NumberedList } from "./NumberedList";
import { LargePersonListItem, SmallPersonListItem } from "./components/people";
import { LargeProductListItem, SmallProductListItem } from "./components/products";
import { Modal } from "./components/modal/modal";

const people = [
  { name: "John Doe", age: 54, hairColor: "brown", hobbies: ["swimming", "bicycling", "video games"] },
  { name: "Brenda Smith", age: 33, hairColor: "black", hobbies: ["golf", "mathematics"] },
  { name: "Jane Garcia", age: 27, hairColor: "blonde", hobbies: ["biology", "medicine", "gymnastics"] },
];

const products = [
  { name: "Flat-Screen TV", price: "$300", description: "Huge LCD screen, a great deal", rating: 4.5 },
  { name: "Basketball", price: "$10", description: "Just like the pros use", rating: 3.8 },
  { name: "Running Shoes", price: "$120", description: "State-of-the-art technology for optimum running", rating: 4.2 },
];

function App() {
  return (
    <>
      <RegularList items={people} resourceName="person" ListItemComponent={LargePersonListItem} />
      <RegularList items={people} resourceName="person" ListItemComponent={SmallPersonListItem} />
      <NumberedList items={products} resourceName="product" ListItemComponent={LargeProductListItem} />
      <NumberedList items={products} resourceName="product" ListItemComponent={SmallProductListItem} />
      <Modal>
        <h1>Modal Content</h1>
      </Modal>
    </>
  );
}
export default App;
```

### 4. Controlled and Uncontrolled Components

This project demonstrates the use of controlled and uncontrolled components in forms and modals.

- **Directory:** `controlled_uncontrolled`
- **Main Component:** `ControlledForm, UncontrolledForm, ControlledModal, UncontrolledModal, ControlledOnboardingFlow, UncontrolledOnboardingFlow`
- **Usage:**

```jsx
import React, { useState } from "react";
import { ControlledForm } from "./components/controlledform/ControlledForm";
import { UncontrolledForm } from "./components/uncontrolledform/UncontrolledForm";
import { UncontrolledModal } from "./components/uncontrolledModal/UncontrolledModal";
import { ControlledModal } from "./components/controlledModal/ControlledModal";
import { UncontrolledOnboardingFlow } from "./components/uncontrolledOnboardingFlow/UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./components/controlledOnboardingFlow/ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h3>Step One</h3>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h3>Step Two</h3>
    <button onClick={() => goToNext({ age: 50 })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h3>Step Three</h3>
    <p>Congrats! you qualify for our senior discount</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);

const StepFour = ({ goToNext }) => (
  <>
    <h3>Step Four</h3>
    <button onClick={() => goToNext({ hairColor: "Brown" })}>Next</button>
  </>
);

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <ControlledForm />
      <UncontrolledForm />
      <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false)}>
        <h3>Hello From Controlled Modal</h3>
      </ControlledModal>
      <UncontrolledModal />
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
      <UncontrolledOnboardingFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
}

export default App;
```

### 5. Data Source

This project demonstrates how to create a reusable data fetching component.

- **Directory:** `containercomponents/serverinstructions`
- **Main Component:** `DataSource`
- **Usage:**

```jsx
import React from "react";
import { DataSource } from "./DataSource";
import axios from "axios";

const serverData = async () => {
  const response = await axios.get("http://localhost:8080/data");
  return response.data;
};

const DisplayData = ({ data }) => (
  <div>
    <h1>Data from Server</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

function App() {
  return (
    <DataSource getDataFunc={serverData} resourceName="data">
      <DisplayData />
    </DataSource>
  );
}
export default App;
```

## Getting Started

Each project is a standalone React application. To get started with any project, navigate to the project's directory and run the following commands:

```js
    npm install
    npm start
```

This will install the necessary dependencies and start the development server. Open http://localhost:3000 to view the application in your browser.
