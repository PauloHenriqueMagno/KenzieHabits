import { createContext, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const addUser = (user) => {
    setUser(user);
    localStorage.setItem("khabitz/user", JSON.stringify(user));
  };

  const editUser = (editedUser) => {
    setUser(editedUser);
    api
      .patch(`/users/${user.id}/`, editedUser, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ user, addUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};
