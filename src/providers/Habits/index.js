import { createContext, useState } from "react";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = () => {};

  const editHabit = () => {};

  const deleteHabit = () => {};

  return (
    <HabitsContext.Provider
      value={{ habits, addHabit, editHabit, deleteHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
