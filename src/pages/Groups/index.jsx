import {
  AccordionActions,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState, useContext, useEffect } from "react";
import {
  Container,
  StyledPaper,
  StyledBox,
  Content,
  StyledTablePagination,
  AccordionSummaryText,
  StyledAccordion,
  StyledButton,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from "./styles";

import { GroupsContext } from "../../providers/Groups";

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
      <Content>
        <StyledPaper>
          <StyledBox>
            <div className="groupsListTitles">
              <Typography>Nome:</Typography>
            </div>
            <div className="groupsListTitles">
              <Typography>Descrição:</Typography>
            </div>
            <div className="groupsListTitles">
              <Typography>Categoria:</Typography>
            </div>
            <StyledTablePagination
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
              <StyledAccordion
                key={group.id}
                expanded={expanded === group.id}
                onChange={handleChange(group.id)}
              >
                <StyledAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={group.id}
                  id={group.id}
                >
                  <AccordionSummaryText>{group.name}</AccordionSummaryText>
                  <AccordionSummaryText>
                    {group.description}
                  </AccordionSummaryText>
                  <AccordionSummaryText>{group.category}</AccordionSummaryText>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
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
                </StyledAccordionDetails>
                <AccordionActions>
                  <StyledButton
                    size="small"
                    onClick={() => subscribeToGroup(group.id)}
                  >
                    Participar deste grupo
                  </StyledButton>
                </AccordionActions>
              </StyledAccordion>
            );
          })}
        </StyledPaper>
      </Content>
    </Container>
  );
};

export default Groups;
