import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserGroupsContext } from "../UserGroups";
import { useContext } from "react";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const { getUserGroup } = useContext(UserGroupsContext);

  const [groups, setGroups] = useState([]);

  const subscribeOnGroup = (groupToSubscribe) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .post(
        `/groups/${groupToSubscribe}/subscribe/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.access}`,
          },
        }
      )
      .then((response) => {
        toast.info(`Inscrição realizada com sucesso!`);
        setGroups([...groups, response.data]);
        console.log(groups);
      })
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
      .then(() => {
        getUserGroup();
        toast.info(`Grupo criado com sucesso!`);
      })
      .catch((err) => console.log(err));
  };

  const getGroups = (category = "", page = undefined) => {
    if (!!page) {
      api
        .get(`/groups/?category=${category}&page=${page}`)
        .then((response) => setGroups(response.data))
        .catch((err) => console.log(err));
    } else {
      api
        .get(`/groups/?category=${category}`)
        .then((response) => setGroups(response.data))
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
