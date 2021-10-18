import { createContext, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([
    {
      title: "Calistenia a tarde (15 minutos)",
      category: "Sáude",
      difficulty: "Muito díficil",
      frequency: "Diária",
      achieved: false,
      how_much_achieved: 30,
      user: 1,
    },
    {
      title: "Calistenia a tarde (15 minutos)",
      category: "Sáude",
      difficulty: "Muito díficil",
      frequency: "Diária",
      achieved: false,
      how_much_achieved: 30,
      user: 2,
    },
    {
      title: "Calistenia a tarde (15 minutos)",
      category: "Sáude",
      difficulty: "Muito díficil",
      frequency: "Diária",
      achieved: false,
      how_much_achieved: 30,
      user: 3,
    },
  ]);

  const addHabit = (newHabit) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .post("/habits/", newHabit, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => setHabits([...habits, response.data]))
      .catch((err) => console.log(err));
  };

  const editHabit = (editedHabit, habitId) => {
    const newHabitsList = habits.filter(
      (habitOnList) => habitOnList.id !== editedHabit.id
    );
    setHabits([newHabitsList, editedHabit]);
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .patch(`/habits/${habitId}`, editedHabit, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then()
      .catch((err) => console.log(err));
  };

  const deleteHabit = (habitToDelete) => {
    const newHabitsList = habits.filter(
      (habitOnList) => habitOnList.id !== habitToDelete
    );
    setHabits(newHabitsList);
    api
      .delete(`/habits/${habitToDelete}/`)
      .then()
      .catch((err) => console.log(err));
  };

  const getHabits = () => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => setHabits(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        addHabit,
        editHabit,
        deleteHabit,
        getHabits,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
