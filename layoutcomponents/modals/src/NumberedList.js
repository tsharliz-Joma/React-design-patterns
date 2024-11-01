export const NumberedList = ({ items, resourceName, ListItemComponent: ItemComponent }) => {
  return (
    <ol>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </ol>
  );
};
