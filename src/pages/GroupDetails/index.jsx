import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { Delete, Edit } from "@material-ui/icons";
import { UserGroupsContext } from "../../providers/UserGroups";
import { Container, Content, StyledPaper } from "./styles";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

const GroupDetails = () => {
  const { groupId } = useParams();
  const { userGroups } = useContext(UserGroupsContext);

  const group = userGroups.filter(
    (groupOnList) => groupOnList.id == groupId
  )[0];
  console.log(group);
  const { activities } = group;

  return (
    <Container>
      <Header />
      <Content>
        <StyledPaper>
          <div className="actionsHeader">
            <Typography sx={{ marginRight: 5 }}>
              Atividades do grupo - {group.name}
            </Typography>
            <Modal modalType="CreateActivity" />
          </div>
          <div className="actionsContent">
            {activities.length === 0 ? (
              <Typography>Nenhuma atividade cadastrada</Typography>
            ) : (
              activities.map((activity) => {
                return (
                  <List>
                    <ListItem
                      secondaryAction={
                        <>
                          <IconButton edge="end">
                            <Edit />
                          </IconButton>
                          <IconButton edge="end">
                            <Delete />
                          </IconButton>
                        </>
                      }
                    >
                      <ListItemText
                        primary={activity.title}
                        secondary={activity.realization_time}
                      />
                    </ListItem>
                  </List>
                );
              })
            )}
          </div>
        </StyledPaper>
      </Content>
    </Container>
  );
};

export default GroupDetails;
