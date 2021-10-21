import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { toast } from "react-toastify";

export const GoalsContext = createContext([]);

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  const getGoals = (groupId, page = undefined) => {
    if (!!page) {
      api
        .get(page)
        .then((response) => setGoals(response))
        .catch((err) => console.log(err));
    } else {
      api.get(`/goals/?group=${groupId}`);
    }
  };

  const createGoal = (newGoal) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    console.log(newGoal);
    api
      .post("/goals/", newGoal, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => {
        /* getGoals(response.group) */
        setGoals([...goals, response.data]);
        toast.info(`Objetivo criado com sucesso!`);
        console.log(goals);
      })
      .catch((err) => console.log(err));
  };

  const editGoal = ({ data, id }) => {
    console.log(data, id);
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    const newList = goals.map((goal) =>
      goal.id === id ? data : goal
    );
    api
      .patch(`/goals/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => {
        /* getGoals(response.group); */
        setGoals(newList);
        toast.info(`Objetivo atualizado com sucesso!`);
        console.log(goals);
      })
      .catch((err) => console.log(err));
    // .then((response) => getGoals(response.group))
  };

  const deleteGoal = (goalId) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .delete(
        `/goals/${goalId}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.access}`,
          },
        }
      )
      .then((_) => toast.success("Objetivo excluido!"))
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
