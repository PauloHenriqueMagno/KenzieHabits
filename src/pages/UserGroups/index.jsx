import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";

import { Container, OpenModalCreateGroup, GroupBox } from "./styled.js";

import GroupsList from "../../components/GroupsList";
import { UserGroupsContext } from "../../providers/UserGroups";

const UserGroups = () => {
  const { userGroups, getUserGroup } = useContext(UserGroupsContext);
  const user = JSON.parse(localStorage.getItem("khabitz/user"));

  const myGroups = userGroups.filter((group) => group.creator.id === user.id);
  const groups = userGroups.filter((group) => group.creator.id !== user.id);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));

<<<<<<< HEAD
    const myGroups = userGroups.filter(group => group.creator.id === user.id);
    const groups = userGroups.filter(group => group.creator.id !== user.id);

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("khabitz/user"));

        if(!!user){
            getUserGroup();
        };
    }, [getUserGroup]);

    return (
        <>
            <Header />
            <Container>
                <GroupBox>
                    <h3>Meus Grupos</h3>
                    {
                    myGroups.length===0?
                        <p>Você não possui grupos</p>
                        :
                        <GroupsList groupList={myGroups} />
                    }
                </GroupBox>
                <GroupBox>
                    <h3>Grupos inscritos</h3>
                    {
                    myGroups.length===0?
                        <p>Você não está inscrito em nenhum grupo</p>
                        :
                        <GroupsList groupList={groups} />
                    }
                </GroupBox>
                <OpenModalCreateGroup>
                    <Modal modalType="CreateGroup" />
                </OpenModalCreateGroup>
            </Container>
        </>
    );
=======
    if (!!user) {
      getUserGroup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <GroupBox>
          <h3>Meus Grupos</h3>
          {myGroups.length === 0 ? (
            <p>Você não possui grupos</p>
          ) : (
            <GroupsList groupList={myGroups} />
          )}
        </GroupBox>
        <GroupBox>
          <h3>Grupos inscritos</h3>
          {groups.length === 0 ? (
            <p>Você não está inscrito em nenhum grupo</p>
          ) : (
            <GroupsList groupList={groups} />
          )}
        </GroupBox>
        <OpenModalCreateGroup>
          <Modal modalType="CreateGroup" />
        </OpenModalCreateGroup>
      </Container>
    </>
  );
>>>>>>> ee86184d7005fcb2a7da70b3ab54117476bf4e49
};

export default UserGroups;
