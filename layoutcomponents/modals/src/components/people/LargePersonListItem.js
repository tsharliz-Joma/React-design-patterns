export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <li>
      <h3>Name: {name}</h3>
      <p>Age: {age}years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </li>
  );
};
