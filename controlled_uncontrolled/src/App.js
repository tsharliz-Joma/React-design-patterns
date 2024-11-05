import React, {useState} from "react";
import {ControlledForm} from "./components/controlledform/ControlledForm";
import {UncontrolledForm} from "./components/uncontrolledform/UncontrolledForm";
import {UncontrolledModal} from "./components/uncontrolledModal/UncontrolledModal";
import {ControlledModal} from "./components/controlledModal/ControlledModal";

const App = () => {
  const [shouldShowModal, setShouldShowModal] = useState(true);
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
    </div>
  );
};

export default App;
