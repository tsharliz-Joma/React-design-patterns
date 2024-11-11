import { useState, useEffect } from "react";

// This function is going to accept another function that tells us how to fetch the data
// The function it accepts is telling the custom hook where to find the data
export const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const result = await getResourceFunc();
      setResource(result);
    };

    fetchCurrentUser();
  }, [getResourceFunc]);

  return resource;
};
