import { Container } from "./styles";
import { UserGroupsContext } from "../../providers/UserGroups";
import { useContext, useState, useEffect } from "react";

const GroupsList = () => {
  const { userGroups } = useContext(UserGroupsContext);

  return <Container></Container>;
};

export default GroupsList;
