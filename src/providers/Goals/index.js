import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const GoalsContext = createContext([]);

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  const getGoals = (groupId, page = undefined) => {
    api
      .get(`/goals/?group=${groupId}`)
      .then((response) => setGoals(response.data.results));
  };

  const createGoal = (newGoal) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .post("/goals/", newGoal, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => {
        setGoals([...goals, response.data]);
        toast.info(`Objetivo criado com sucesso!`);
      })
      .catch((err) => console.log(err));
  };

  const editGoal = ({ data, id }) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    const newList = goals.map((goal) => (goal.id === id ? data : goal));
    api
      .patch(`/goals/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => {
        setGoals(newList);
        toast.info(`Objetivo atualizado com sucesso!`);
      })
      .catch((err) => console.log(err));
  };

  const deleteGoal = (goalId) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .delete(`/goals/${goalId}/`, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((_) => {
        setGoals(goals.filter((goal) => goal.id !== goalId));
        toast.success("Objetivo excluido!");
      })
      .catch((err) => console.log(err));
  };
  return (
    <GoalsContext.Provider
      value={{
        goals,
        getGoals,
        createGoal,
        editGoal,
        deleteGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
