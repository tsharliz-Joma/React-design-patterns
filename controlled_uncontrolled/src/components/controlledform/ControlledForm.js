import {useState, useEffect} from "react";

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  // One benefit of ControlledForms is you can do things like form validation while the user is typing
  useEffect(() => {
    if (name.length < 2) {
      setNameInputError(`Name must be two or more characters`);
    } else {
      setNameInputError("");
    }
  }, [name, age, hairColor]);

  return (
    <div>
      <h1>Controlled Form</h1>
      <form>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameInputError && <p>{nameInputError}</p>}
        <input
          name="age"
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <input
          name="hairColor"
          type="text"
          placeholder="Hair Color"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
