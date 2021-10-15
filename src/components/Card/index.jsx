import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Card = () => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardContent>
        {/* Calistenia a tarde (15 minutos) <br />
        Dificil <br />
        Diariamente */}
      </CardContent>
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
