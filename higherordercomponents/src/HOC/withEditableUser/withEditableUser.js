import React, { useState, useEffect } from "react";
import axios from "axios";

export const withEditableUser = (Component, userId) => {
  // HOC accepts a component and returns a new component with props that you can define

  return (props) => {
    // This will represent the server side data
    // We want to have a backup of the original user data
    const [originalUser, setOriginalUser] = useState(null);
    // This is going to be the current data that we are editing on the client side
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await axios.post(`/users/${userId}`, { user });
      setOriginalUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };
    
    // i have defined the props that i want to pass to the component up above, i then pass them to the component 
    return <Component {...props} user={user} onChangeUser={onChangeUser} onSaveUser={onSaveUser} onResetUser={onResetUser} />;
  };
};
