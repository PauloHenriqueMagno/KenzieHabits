import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import GoalsCard from "../../components/GoalsCard";
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
import { GoalsContext } from "../../providers/Goals";

const GroupDetails = () => {
  const { groupId } = useParams();
  const { userGroups } = useContext(UserGroupsContext);
  const { deleteGoal, editGoal } = useContext(GoalsContext);

  const group = userGroups.filter(
    (groupOnList) => groupOnList.id == groupId
  )[0];

  const { activities, goals } = group;

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

        
        <StyledPaper>
          <div className="actionsHeader">
            <Typography sx={{ marginRight: 5 }}>
              Objetivos do grupo - {group.name}
            </Typography>
            <Modal modalType="CreateGoal" />
          </div>
          <div className="goalsContent">
            {goals.length === 0 ? (
              <Typography>Nenhuma atividade cadastrada</Typography>
            ) : (
              goals.map((goal) => {
                return (
                  <GoalsCard
                    key={goal.id}
                    goal={goal}
                    del={deleteGoal}
                    edit={editGoal}
                  />
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
