import { Redirect, useHistory, useParams } from "react-router";
import { useContext, useEffect } from "react";

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import GoalsCard from "../../components/GoalsCard";
import ActivitiesList from "../../components/ActivitiesList";
import { UserGroupsContext } from "../../providers/UserGroups";
import { GoalsContext } from "../../providers/Goals";
import { Container, Content, StyledPaper, StyledButton } from "./styles";
import { Typography } from "@material-ui/core";
import { ActivitiesContext } from "../../providers/Activities";

const GroupDetails = () => {
  const history = useHistory();
  const { groupId } = useParams();
  const { userGroups, unsubscribeOnGroup } = useContext(UserGroupsContext);
  const { goals, deleteGoal, editGoal, getGoals } = useContext(GoalsContext);
  const { activities, getActivities } = useContext(ActivitiesContext);

  const group = userGroups.filter(
    // eslint-disable-next-line eqeqeq
    (groupOnList) => groupOnList.id == groupId
  )[0];

  useEffect(() => {
    getGoals(groupId);
    getActivities(groupId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const unsubscribe = () => {
    unsubscribeOnGroup(groupId);

    history.push("/dashboard/groups");
  };

  return (
    <Container>
      <Header />
      <Content>
        <StyledPaper>
          <div className="actionsHeader">
            <Typography sx={{ marginRight: 5 }}>
              Atividades do grupo - {group.name}
            </Typography>
            <Modal modalType="CreateActivity" groupId={groupId} />
          </div>
          <div className="actionsContent">
            {activities.length === 0 ? (
              <Typography>Nenhuma atividade cadastrada</Typography>
            ) : (
              <ActivitiesList activities={activities} />
            )}
          </div>
        </StyledPaper>

        <StyledPaper>
          <div className="actionsHeader">
            <Typography sx={{ marginRight: 5 }}>
              Objetivos do grupo - {group.name}
            </Typography>
            <Modal modalType="CreateGoal" groupId={group.id} />
          </div>
          <div className="goalsContent">
            {goals.length === 0 ? (
              <Typography>Nenhum objetivo cadastrado</Typography>
            ) : (
              goals
                .sort((a, b) => a.id - b.id)
                .map((goal) => {
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
        <StyledButton onClick={unsubscribe}>Sair do grupo</StyledButton>
      </Content>
    </Container>
  );
};

export default GroupDetails;
