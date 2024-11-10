import React, { useState, useEffect } from "react";
import axios from "axios";

const captialize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    // This will represent the server side data
    // We want to have a backup of the original user data
    const [originalData, setOriginalData] = useState(null);
    // This is going to be the current data that we are editing on the client side
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      };
      fetchData();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${captialize(resourceName)}`]: onChange,
      [`onSave${captialize(resourceName)}`]: onSave,
      [`onReset${captialize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
