import { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const addUser = () => {};

  const editUser = () => {};

  return (
    <UserContext.Provider value={{ user, addUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};
