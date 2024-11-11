import React from "react";
import { ListItem, UnorderedList } from "../../style";

const isObject = (x) => typeof x === "object" && x !== null;

export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <ListItem>{data}</ListItem>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <ListItem key={key}>
          {key}:
          <UnorderedList>
            <RecursiveComponent data={value} />
          </UnorderedList>
        </ListItem>
      ))}
    </>
  );
};
