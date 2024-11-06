import React, {useState} from "react";
import {ControlledForm} from "./components/controlledform/ControlledForm";
import {UncontrolledForm} from "./components/uncontrolledform/UncontrolledForm";
import {UncontrolledModal} from "./components/uncontrolledModal/UncontrolledModal";
import {ControlledModal} from "./components/controlledModal/ControlledModal";
import {UncontrolledOnboardingFlow} from "./components/uncontrolledOnboardingfFlow/UncontrolledOnboardingFlow";
import {ControlledOnboardingFlow} from "./components/controlledOnboardingFlow/ControlledOnboardingFlow";

const StepOne = ({goToNext}) => (
  <>
    <h3>Step One</h3>
    <button onClick={() => goToNext({name: "John Doe"})}>Next</button>
  </>
);

const StepTwo = ({goToNext}) => (
  <>
    <h3>Step Two</h3>
    <button onClick={() => goToNext({age: 50})}>Next</button>
  </>
);

const StepThree = ({goToNext}) => (
  <>
    <h3>Step Three</h3>
    <p>Congrats! you qualify for our senior discount</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);

const StepFour = ({goToNext}) => (
  <>
    <h3>Step Four</h3>
    <button onClick={() => goToNext({hairColor: "Brown"})}>Next</button>
  </>
);

const App = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({...onboardingData, ...stepData});
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <div id="modals">
        <h1>Forms</h1>
        <UncontrolledForm />
        <ControlledForm />
      </div>
      <div id="modals">
        <h1>Modals</h1>
        <UncontrolledModal />
        <div>
          <ControlledModal
            shouldShow={shouldShowModal}
            onRequestClose={() => setShouldShowModal(false)}>
            <h3>Hello From Controlled Modal</h3>
          </ControlledModal>
          <button onClick={() => setShouldShowModal(!shouldShowModal)}>
            {shouldShowModal ? "Hide Modal" : "Show Modal"}
          </button>
        </div>
      </div>
      <div id="Onboarding Flow">
        <h1>Uncontrolled Onboarding</h1>
        <UncontrolledOnboardingFlow
          onFinish={(data) => {
            console.log(data);
          }}>
          {/* The children all have the goToNext function as an inbuilt prop */}
          <StepOne />
          <StepTwo />
          <StepThree />
        </UncontrolledOnboardingFlow>
        <ControlledOnboardingFlow
          currentIndex={currentIndex}
          onNext={onNext}
          onFinish={(data) => {
            console.log(data);
          }}>
          {/* The children all have the goToNext function as an inbuilt prop */}
          <StepOne />
          <StepTwo />
          {onboardingData.age >= 62 && <StepThree />}
          <StepFour />
        </ControlledOnboardingFlow>
      </div>
    </div>
  );
};

export default App;
