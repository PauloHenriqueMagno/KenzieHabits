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
        getUserGroup()
    },[])

    return (
        <>
            <Header />
            <Container>    
                <GroupsList groupList={userGroups} />

                <OpenModalCreateGroup>
                    <Modal modalType="CreateGroup" />
                </OpenModalCreateGroup>
            </Container>
      </>
    );
};

export default UserGroups;