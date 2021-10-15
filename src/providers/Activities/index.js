import { createContext, useState } from "react";
import api from "../../services/api";

export const ActivitiesContext = createContext([]);

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const getActivities = (groupId, page = undefined) => {
    if (page) {
      api
        .get(page)
        .then((response) => setActivities(response))
        .catch((err) => console.log(err));
    } else {
      api
        .get(`/activities/?group=${groupId}`)
        .then((response) => setActivities(response))
        .catch((err) => console.log(err));
    }
  };

  const createActivity = (newActivity) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .post("/activities/", newActivity, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => getActivities(response.group))
      .catch((err) => console.log(err));
  };

  const editActivity = (editedActivity, activityId) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .patch(`/activities/${activityId}/`, editedActivity, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => getActivities(response.group))
      .catch((err) => console.log(err));
  };

  const removeActivity = (activityId, groupId) => {
    api
      .delete(`/activities/${activityId}/`)
      .then((_) => getActivities(groupId))
      .catch((err) => console.log(err));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        createActivity,
        editActivity,
        removeActivity,
        getActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
