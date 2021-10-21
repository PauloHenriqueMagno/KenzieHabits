import { createContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .post("/habits/", newHabit, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => {
        setHabits([...habits, response.data]);
        toast.info(`Hábito criado com sucesso!`);
        console.log(habits);
      })
      .catch((err) => console.log(err));
  };

  const editHabit = ({ data, id }) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    const newList = habits.map((habit) => (habit.id === id ? data : habit));

    console.log(data);
    api
      .patch(`/habits/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then(() => {
        setHabits(newList);
        toast.info(`Hábito atualizado com sucesso!`);
        console.log(habits);
      })
      .catch((err) => {
        console.log(err);
        console.log(data);
      });
  };

  const deleteHabit = (habitToDelete) => {
    const newHabitsList = habits.filter(
      (habitOnList) => habitOnList.id !== habitToDelete
    );
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    console.log(user);
    api
      .delete(`/habits/${habitToDelete}/`, {
        headers: {
          Authorization: `
            Bearer ${user.access}`,
        },
      })
      .then((_) => toast.success("Objetivo excluido!"))
      .catch((err) => console.log(err));
    setHabits(newHabitsList);
  };

  const getHabits = () => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    console.log(user.access);
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
