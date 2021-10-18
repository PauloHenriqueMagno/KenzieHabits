import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState, useContext, useEffect } from "react";
import { Container } from "./styles";

import { GroupsContext } from "../../providers/Groups";

const Groups = () => {
  const [expanded, setExpanded] = useState(false);

  const { groups, getGroups } = useContext(GroupsContext);

  useEffect(() => {
    getGroups();

    console.log(groups);
  }, []);

  const subscribeToGroup = (groupId) => {
    console.log(groupId);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container>
      <Paper>
        {groups.results?.map((group) => {
          return (
            <Accordion
              key={group.id}
              expanded={expanded === group.id}
              onChange={handleChange(group.id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {group.name}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {group.description}
                </Typography>
                <Typography>{group.category}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>
                    <Typography>Atividades disponíveis:</Typography>
                  </div>
                  <div>
                    <Typography>Objetivos do grupo:</Typography>
                  </div>
                  <div>
                    <Typography>Quantidade de membros:</Typography>
                  </div>
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => subscribeToGroup(group.id)}
                >
                  Participar deste grupo
                </Button>
              </AccordionActions>
            </Accordion>
          );
        })}
      </Paper>
    </Container>
  );
};

export default Groups;
