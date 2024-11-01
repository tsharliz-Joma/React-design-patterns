
// This regular list component is a component 
// that accetps an array of items
// and then renders the component that you specify, for each item in the array.
// in this case it is used to render a list item 
export const RegularList = ({ items, resourceName, ListItemComponent: ItemComponent }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </ul>
  );
};
