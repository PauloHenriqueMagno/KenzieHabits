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
      .catch((_) => toast.error("Erro adicionar hábito, tente novamente"));
  };

  const editHabit = ({ data, id }) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));

    api
      .patch(`/habits/${id}/`, data, {
        headers: { Authorization: `Bearer ${user.access}` },
      })
      .then(() => {
        toast.info(`Hábito atualizado com sucesso!`);
        getHabits();
      })
      .catch((_) => toast.error("Erro editar, tente novamente"));
  };

  const deleteHabit = (habitToDelete) => {
    const newHabitsList = habits.filter(
      (habitOnList) => habitOnList.id !== habitToDelete
    );
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .delete(`/habits/${habitToDelete}/`, {
        headers: {
          Authorization: `
            Bearer ${user.access}`,
        },
      })
      .then((_) => toast.info("Hábito excluido!"))
      .catch((_) => toast.error("Erro ao deletar, tente novamente"));
    setHabits(newHabitsList);
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
      .catch((_) =>
        toast.error("Erro ao atualizar lista de hábitos, tente novamente")
      );
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
