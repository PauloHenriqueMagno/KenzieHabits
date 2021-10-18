import { createContext, useState } from "react";
import api from "../../services/api";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const subscribeOnGroup = (groupToSubscribe) => {
    api
      .post(`/groups/${groupToSubscribe.id}/subscribe`)
      .then()
      .catch((err) => console.log(err));
  };

  const createGroup = (newGroup) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .post("/groups/", newGroup, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then()
      .catch((err) => console.log(err));
  };

  const getGroups = (category, page = undefined) => {
    if (!!page) {
      api
        .get(page)
        .then((response) => setGroups(response.data))
        .catch((err) => console.log(err));
    } else {
      api
        .get(`/groups/?category=${category}`)
        .then((response) => setGroups(response))
        .catch((err) => console.log(err));
    }
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        createGroup,
        getGroups,
        subscribeOnGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
