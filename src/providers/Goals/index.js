import { createContext, useState } from "react";
import api from "../../services/api";

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
    api
      .post("/goals/", newGoal, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => getGoals(response.group))
      .catch((err) => console.log(err));
  };

  const editGoal = (editedGoal, goalId) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .patch(`/goals/${goalId}/`, editedGoal, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => getGoals(response.group))
      .catch((err) => console.log(err));
  };

  const deleteGoal = (goalId, groupId) => {
    api
      .delete(`/goals/${goalId}/`)
      .then((_) => setGoals(groupId))
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
