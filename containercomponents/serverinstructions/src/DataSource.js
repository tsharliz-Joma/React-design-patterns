import React, { useState, useEffect } from "react";

// This component will be used to fetch data from the server and pass it down to its children.
// This componenent is highly reusable and can be used to fetch any type of data from the server.
export const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
  const [state, setState] = useState(null);
  // The getDataFunc is a function that will be passed as a prop to the DataSource component.

  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      // This setState will set the state to whatever|ANY data is returned from the getDataFunc.
      setState(data);
    })();
  }, [getDataFunc]);

  return (
    <> 
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
