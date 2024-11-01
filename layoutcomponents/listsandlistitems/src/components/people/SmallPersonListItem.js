export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <li>
      Name: {name}, Age:{age} years
    </li>
  );
};
