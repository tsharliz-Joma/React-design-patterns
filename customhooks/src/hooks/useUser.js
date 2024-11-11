import { useState, useEffect } from "react";
import axios from "axios";

// This function accepts a userId as an argument
export const useUser = (userId) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await axios.get(`/api/users/${userId}`);
      setUser(response.data);
    };

    fetchCurrentUser();
    console.log(user);
  }, [userId]);
  return user;
};
