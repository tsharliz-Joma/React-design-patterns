import { useState, useEffect } from "react";
import axios from "axios";

// This function accepts a userId as an argument
export const useResource = (resourceUrl) => {
  const [resource, setResouce] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await axios.get(resourceUrl);
      setResouce(response.data);
    };

    fetchCurrentUser();
  }, [resourceUrl]);
  return resource;
};
