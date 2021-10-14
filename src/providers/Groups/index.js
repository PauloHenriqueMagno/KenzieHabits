import { createContext, useState } from "react";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const addGroup = () => {};

  return (
    <GroupsContext.Provider value={{ groups, addGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
