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
import { useContext } from "react";
import Modal from "../../components/Modal";
import { HabitsContext } from "../../providers/Habits";

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
  const { getHabits } = useContext(HabitsContext);

  const handleAchieved = () => {
    edit({
      data: {
        achieved: !achieved,
        category,
        title,
        difficulty,
        frequency,
      },
      id,
    });
    getHabits();
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
              value={achieved ? 100 : how_much_achieved}
            />
          </Box>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={achieved}
                  onChange={handleAchieved}
                  disabled={achieved}
                />
              }
              label="Finalizado?"
            />
          </FormGroup>
          <CardActions>
            <IconButton aria-label="delete" size="small">
              <Modal modalType="UpdateHabit" habitId={id} />
            </IconButton>
            <IconButton onClick={deleteHabit} aria-label="delete">
              <Delete />
            </IconButton>
          </CardActions>
        </StyledCard>
      </div>
    </>
  );
};

export default Cards;
