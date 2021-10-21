import { createContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { UserGroupsContext } from "../UserGroups";
import { useContext } from "react";

export const ActivitiesContext = createContext([]);

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const { getUserGroups } = useContext(UserGroupsContext);

  const getActivities = (groupId, page = undefined) => {
    if (!!page) {
      api
        .get(page)
        .then((response) => {
          setActivities(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      api
        .get(`/activities/?group=${groupId}`)
        .then((response) => setActivities(response.data))
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
      .then((response) => {
        console.log(getUserGroups());
        getActivities(response.data.group);
        console.log(activities);
        toast.info(`Atividade criada com sucesso!`);
      })
      .catch((err) => console.log(err));
  };

  const editActivity = ({ data, id }) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    const newList = activities.map((activity) =>
      activity.id === id ? data : activity
    );
    api
      .patch(`/activities/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => {
        setActivities(newList);
        toast.info(`Atividade atualizada com sucesso!`);
        console.log(activities);
      })
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
