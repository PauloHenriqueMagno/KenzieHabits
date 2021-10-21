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
      })
      .catch((err) => console.log(err));
  };

  const editHabit = ({ data, id }) => {
   
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    const newList = habits.map((habit) =>
      habit.id === id ? data : habit
    );
    console.log(habits)

    api
      .patch(`/habits/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then(() => {
        setHabits(newList);
        toast.info(`Hábito atualizado com sucesso!`);
      })
      .catch((err) => {
        console.log(err);
      });
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
