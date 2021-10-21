import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserGroupsContext = createContext([]);

export const UserGroupsProvider = ({ children }) => {
  const [userGroups, setUserGroups] = useState([]);

  const editGroup = ({ data, id }) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    const newList = userGroups.map((userGroup) =>
      userGroup.id === id ? data : userGroup
    );
    api
      .patch(`/groups/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then(() => {
        setUserGroups(newList)
        getUserGroup()
        toast.info("Grupo criado com sucesso!")
        console.log(userGroups)
      })
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
