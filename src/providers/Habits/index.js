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
    // const newHabitsList = habits.filter(
    //   (habitOnList) => habitOnList.id !== data.id
    // );
    // setHabits([newHabitsList, data]);
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .patch(`/habits/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => {
        setHabits([...habits, response.data]);
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
    setHabits(newHabitsList);
    api
      .delete(`/habits/${habitToDelete}/`)
      .then()
      .catch((err) => console.log(err));
  };

  const getHabits = () => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    console.log(user.access);
    api
      .get("/habits/", {
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
