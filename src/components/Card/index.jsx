import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useContext } from "react";
// import { HabitsContext } from "../../providers/Habits";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#F36A21" : "#F36A21",
  },
}));

const Card = () => {
  // const { habit, setHabit } = useContext(HabitsContext);
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardContent>
        {/* {habit.map((habit, index) => (
          <div key={index}>
            <p> {habit.title}</p>
            <p> {habit.category}</p>
            <p> {habit.difficulty}</p>
            <p> {habit.frequency}</p>
          </div>
        ))} */}
        Olá!
      </CardContent>
      <Box sx={{ flexGrow: 1 }}>
        <br />
        <BorderLinearProgress variant="determinate" value={20} />
      </Box>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Concluído"
        />
      </FormGroup>
      <CardActions>
        <IconButton aria-label="add" size="small">
          <AddIcon fontSize="small" />
        </IconButton>

        <IconButton aria-label="delete" size="small">
          <EditIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Card;
