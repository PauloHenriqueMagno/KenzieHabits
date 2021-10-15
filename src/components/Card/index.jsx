import { Add, Edit } from "@material-ui/icons";
import {
  IconButton,
  FormGroup,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Box,
  styled,
} from "@material-ui/core";

import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";

import LinearProgress, {
  linearProgressClasses,
} from "@material-ui/core/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 25,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: theme.palette.mode === "light" ? "#F36A21" : "#F36A21",
  },
}));

const Cards = () => {
  const { habits, setHabit } = useContext(HabitsContext);
  console.log(habits);

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardContent>
        {habits.map((habits, index) => (
          <div key={index}>
            <p> {habits.title}</p>
            <p> {habits.category}</p>
            <p> {habits.difficulty}</p>
            <p> {habits.frequency}</p>
            <Box sx={{ flexGrow: 1 }}>
              <br />
              <BorderLinearProgress
                variant="determinate"
                value={habits.how_much_achieved}
              />
            </Box>
          </div>
        ))}
      </CardContent>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Concluído"
        />
      </FormGroup>
      <CardActions>
        <IconButton aria-label="add" size="small">
          <Add fontSize="small" />
        </IconButton>

        <IconButton aria-label="delete" size="small">
          <Edit fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;
