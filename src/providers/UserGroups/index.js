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
        setUserGroups(newList);
        toast.info("Grupo criado com sucesso!");
      })
      .catch((_) => toast.error("Erro ao editar, tente novamente!"));
  };

  const unsubscribeOnGroup = (groupToUnsubscribe) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .delete(`/groups/${groupToUnsubscribe}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${user.access}`,
        },
      })
      .then((_) => {
        toast.info("Desinscrição realizada com sucesso!");
        getUserGroup();
      })
      .catch((_) => toast.error("Erro ao se inscrever, tente novamente!"));
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
      .catch((_) => toast.error("Erro ou atualizar lista, tente novamente!"));
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
