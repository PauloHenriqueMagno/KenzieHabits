import { createContext, useState } from "react";

export const ActivitiesContext = createContext([]);

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivitie = () => {};

  const editActivitie = () => {};

  const removeActivitie = () => {};

  return (
    <ActivitiesContext.Provider
      value={{ activities, addActivitie, editActivitie, removeActivitie }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
