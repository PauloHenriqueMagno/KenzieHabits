import { createContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const addUser = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem("khabitz/user", JSON.stringify(userInfo));
  };

  const editUser = (editedUser) => {
    setUser(editedUser);
    const userInfo = JSON.parse(localStorage.getItem("khabitz/user"));
    api
      .patch(`/users/${userInfo.id}/`, editedUser, {
        headers: {
          Authorization: `Bearer ${userInfo.access}`,
        },
      })
      .then(
        toast.info("Usuário atualizado com sucesso")
      )
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        addUser,
        editUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
