import { createContext, useState } from "react";

export const UserGroupsContext = createContext([]);

export const UserGroupsProvider = ({ children }) => {
  const [userGroups, setUserGroups] = useState([]);

  const addUserGroup = () => {};

  const editUserGroup = () => {};

  const deleteUserGroup = () => {};

  return (
    <UserGroupsContext.Provider
      value={{ userGroups, addUserGroup, editUserGroup, deleteUserGroup }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};
