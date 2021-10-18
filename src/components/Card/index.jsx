import { Delete, Edit } from "@material-ui/icons";
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
import { orange } from "@material-ui/core/colors";

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

const StyledCard = styled(Card)({
  boxShadow: "inset 0 0 1em rgba(0, 0, 0, 0.2)",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#5D6A5A",
  borderColor: "#000000",
  color: " #ffffff",
  maxWidth: "300px",

  span: {
    color: " #F36A21",
  },
});

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
