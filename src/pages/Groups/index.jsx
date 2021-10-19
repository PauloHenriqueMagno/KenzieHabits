import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  TablePagination,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState, useContext, useEffect } from "react";
import { Container, StyledPaper, StyledBox } from "./styles";

import { GroupsContext } from "../../providers/Groups";
import { Box } from "@material-ui/system";

const Groups = () => {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(0);

  const { groups, getGroups } = useContext(GroupsContext);

  useEffect(() => {
    getGroups();
  }, []);

  const subscribeToGroup = (groupId) => {
    console.log(groupId);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handlePage = (event, newPage) => {
    getGroups("", newPage + 1);
    setPage(newPage);
  };
  return (
    <Container>
      <StyledPaper>
        <StyledBox>
          <Typography sx={{ width: "25%", flexShrink: 0 }}>Nome:</Typography>
          <Typography sx={{ width: "25%", flexShrink: 0 }}>
            Descrição:
          </Typography>
          <Typography sx={{ width: "25%", flexShrink: 0 }}>
            Categoria:
          </Typography>
          <TablePagination
            sx={{ color: "white" }}
            component="div"
            count={groups.count}
            page={page}
            onPageChange={handlePage}
            rowsPerPage={15}
            rowsPerPageOptions={[15]}
          />
        </StyledBox>
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
                <Typography sx={{ width: "25%", flexShrink: 0 }}>
                  {group.name}
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", width: "25%", flexShrink: 0 }}
                >
                  {group.description}
                </Typography>
                <Typography sx={{ width: "25%", flexShrink: 0 }}>
                  {group.category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Typography>Atividades disponíveis:</Typography>
                    <List>
                      {group.activities.length !== 0 ? (
                        group.activities.map((activitie) => {
                          return (
                            <ListItem>
                              <ListItemText primary={activitie.title} />
                            </ListItem>
                          );
                        })
                      ) : (
                        <Typography>
                          Nenhuma atividade disponivel no momento
                        </Typography>
                      )}
                    </List>
                  </div>
                  <div>
                    <Typography>Objetivos do grupo:</Typography>
                    <List>
                      {group.goals.length !== 0 ? (
                        group.goals.map((goal) => {
                          return (
                            <ListItem>
                              <ListItemText primary={goal.title} />
                            </ListItem>
                          );
                        })
                      ) : (
                        <Typography>
                          Nenhuma atividade disponivel no momento
                        </Typography>
                      )}
                    </List>
                  </div>
                  <div>
                    <Typography>
                      Este grupo tem {group.users_on_group.length} membros
                      ativos no momento
                    </Typography>
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
      </StyledPaper>
    </Container>
  );
};

export default Groups;
