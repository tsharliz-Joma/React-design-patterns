import {createRef} from "react";

// What makes it uncontrolled is that the component does not care about
// what the values of the inputs are until we submit the form
export const UncontrolledForm = () => {
  const nameInput = createRef();
  const ageInput = createRef();
  const hairColor = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // We get the current value of the inputs
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColor.current.value);
  };

  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" ref={nameInput} />
        <input name="age" type="text" placeholder="Age" ref={ageInput} />
        <input
          name="hairColor"
          type="text"
          placeholder="Hair Color"
          ref={hairColor}
        />
        <button name="submit">Submit</button>
      </form>
    </div>
  );
};
