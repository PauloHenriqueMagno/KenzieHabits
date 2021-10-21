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
import { useState } from "react";
import Modal from "../../components/Modal";

const Cards = ({
  habits: {
    category,
    title,
    difficulty,
    frequency,
    how_much_achieved,
    achieved,
    id,
  },
  del,
  edit,
}) => {
  const [achievedGoal, setAchievedGoal] = useState(achieved);

  const handleAchieved = (event) => {
    setAchievedGoal(!achievedGoal);
    edit({ data: { achieved: !achievedGoal }, id: id });
  };

  const deleteHabit = () => {
    del(id);
  };
  return (
    <>
      <div>
        <StyledCard>
          <span> {category}</span>
          <p>
            <b> {title}</b>
          </p>
          <p> {difficulty}</p>
          <p> {frequency}</p>
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
              <Modal modalType="UpdateHabit" />
            </IconButton>

            <IconButton aria-label="delete" size="small">
              <Delete onClick={deleteHabit} fontSize="small" />
            </IconButton>
          </CardActions>
        </StyledCard>
      </div>
    </>
  );
};

export default Cards;
