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
import Modal from "../Modal/index";

const Cards = ({
  habits: { category, title, difficulty, frequency, how_much_achieved, id },
  del,
  edit,
}) => {
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
              control={<Checkbox defaultChecked />}
            />
          </FormGroup>
          <CardActions>
            <IconButton aria-label="add" size="small">
              <Delete onClick={del} fontSize="small" />
            </IconButton>

            <IconButton aria-label="delete" size="small">
              <Modal modalType="UpdateHabit" habitId={id} />
              {/* <Edit onClick={edit} fontSize="small" /> */}
            </IconButton>
          </CardActions>
        </StyledCard>
      </div>
    </>
  );
};

export default Cards;
