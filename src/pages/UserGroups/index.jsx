import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";

import {
    Container,
    OpenModalCreateGroup,
    GroupBox,
} from "./styled.js";

import GroupsList from "../../components/GroupsList";
import { UserGroupsContext } from "../../providers/UserGroups";

const UserGroups = () => {
    const { userGroups, getUserGroup } = useContext(UserGroupsContext);
    const user = JSON.parse(localStorage.getItem("khabitz/user"));

    const myGroups = userGroups.filter(group => group.creator.id === user.id);
    const groups = userGroups.filter(group => group.creator.id !== user.id);

    useEffect(()=>{
        getUserGroup();
    },[]);

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
};

export default UserGroups;