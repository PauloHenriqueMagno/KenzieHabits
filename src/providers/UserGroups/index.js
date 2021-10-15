import { createContext, useState } from "react";
import api from "../../services/api";

export const UserGroupsContext = createContext([]);

export const UserGroupsProvider = ({ children }) => {
  const [userGroups, setUserGroups] = useState([]);

  const editGroup = (editedGroup, groupId) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .patch(`/groups/${groupId}`, editedGroup, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((_) => getUserGroup())
      .catch((err) => console.log(err));
  };

  const unsubscribeOnGroup = (groupToUnsubscribe) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .delete(`/groups/${groupToUnsubscribe}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((_) => getUserGroup())
      .catch((err) => console.log(err));
  };

  const getUserGroup = () => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((response) => setUserGroups(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <UserGroupsContext.Provider
      value={{
        userGroups,
        getUserGroup,
        unsubscribeOnGroup,
        editGroup,
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};
