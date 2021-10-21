import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal"
import { UserGroupsContext } from "../../providers/UserGroups";

import {
    Container,
    OpenModalCreateGroup,
} from "./styled.js";

import GroupsList from "../../components/GroupsList";

const UserGroups = () => {
    const { userGroups, getUserGroup } = useContext(UserGroupsContext);
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("khabitz/user"));

        if(!!user){
            getUserGroup()
        }
    },[])

    return (
        <>
            <Header />
            <Container>    
                <GroupsList groupList={userGroups} />

        <Modal modalType="CreateGroup" />
                <OpenModalCreateGroup>
                </OpenModalCreateGroup>
            </Container>
      </>
    );
};

export default UserGroups;