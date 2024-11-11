import { useState, useEffect } from "react";
import axios from "axios";

// Custom hooks are really just funcitons that call other hooks
export const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await axios.get("/api/current-user");
      setUser(response.data);
    };

    fetchCurrentUser();
    console.log(user);
  }, []);
  return user;
};
