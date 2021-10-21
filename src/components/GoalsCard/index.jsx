import { Delete } from "@material-ui/icons";
import {
  IconButton,
  FormGroup,
  FormControlLabel,
  CardActions,
  Checkbox,
  Box,
} from "@material-ui/core";
import { StyledCard, BorderLinearProgress } from "./style.js";
import Modal from "../Modal";
import { useContext, useState } from "react";
import { UserGroupsContext } from "../../providers/UserGroups/index.js";

const GoalsCard = ({
  goal: { title, difficulty, how_much_achieved, achieved, id },
  del,
  edit,
}) => {
  const [achievedGoal, setAchievedGoal] = useState(achieved);
  const { getUserGroup } = useContext(UserGroupsContext);

  const handleAchieved = (event) => {
    setAchievedGoal(!achievedGoal);
    edit({ data: { achieved: !achievedGoal }, id: id });
    getUserGroup();
  };

  const deleteGoal = () => {
    del(id);
  };
  return (
    <>
      <div>
        <StyledCard>
          <p>
            <b> {title}</b>
          </p>
          <p> {difficulty}</p>
          <Box sx={{ flexGrow: 1 }}>
            <br />
            <BorderLinearProgress
              variant="determinate"
              value={how_much_achieved}
            />
          </Box>
          <FormGroup>
            <FormControlLabel
              label="Finalizado?"
              control={
                <Checkbox checked={achievedGoal} onChange={handleAchieved} />
              }
            />
          </FormGroup>
          <CardActions>
            <IconButton aria-label="add" size="small">
              <Modal modalType="UpdateGoal" goalId={id} />
            </IconButton>

            <IconButton aria-label="delete" size="small" onClick={deleteGoal}>
              <Delete fontSize="small" />
            </IconButton>
          </CardActions>
        </StyledCard>
      </div>
    </>
  );
};

export default GoalsCard;
