import { Delete, Edit } from "@material-ui/icons";
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
import { HabitsContext } from "../../providers/Habits";

const Cards = () => {
  const { habits, deleteHabit, editHabit } = useContext(HabitsContext);
  console.log(habits);

  return (
    <>
      {habits.map((habits, index) => (
        <div key={index}>
          <StyledCard>
            <span> {habits.category}</span>
            <p>
              <b> {habits.title}</b>
            </p>
            <p> {habits.difficulty}</p>
            <p> {habits.frequency}</p>
            <Box sx={{ flexGrow: 1 }}>
              <br />
              <BorderLinearProgress
                variant="determinate"
                value={habits.how_much_achieved}
              />
            </Box>
            <FormGroup>
              <FormControlLabel
                label="Finalizado?"
                control={<Checkbox defaultChecked />}
              />
            </FormGroup>
            <CardActions>
              <IconButton aria-label="add" size="small">
                <Delete onClick={deleteHabit} fontSize="small" />
              </IconButton>

              <IconButton aria-label="delete" size="small">
                <Edit onClick={editHabit} fontSize="small" />
              </IconButton>
            </CardActions>
          </StyledCard>
        </div>
      ))}
    </>
  );
};

export default Cards;
