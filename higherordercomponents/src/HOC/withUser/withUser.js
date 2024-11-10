import React, { useState, useEffect } from "react";
import axios from "axios";

// HOC accetps a component and a userId
export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      const fetchUser = async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      };
      fetchUser();
    }, [userId]);

    // It returns the component with the user data and any other props that were passed to it
    return <Component {...props} user={user} />;
  };
};
