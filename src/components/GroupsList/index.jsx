import { useHistory } from "react-router";
import { StyledCardGroup, List, TitleDescription } from "./styled.js";

const GroupsList = ({ groupList }) => {
  const history = useHistory();

  const maxString = (string) => {
    return string.length > 50 ? string.slice(0, 50) + "..." : string;
  };

  return (
    <List>
      <TitleDescription>
        <p>Grupo:</p>

        <div>
          <p>Descrição:</p>
          <p>Categoria:</p>
        </div>
      </TitleDescription>
      {groupList.map((group) => (
        <li>
          <StyledCardGroup onClick={() => history.push(`/group/${group.id}`)}>
            <h4>{maxString(group.name)}</h4>

            <div>
              <p>
                <span>Descrição: </span>
                {maxString(group.description)}
              </p>
              <p>
                <span>Categoria: </span>
                {maxString(group.category)}
              </p>
            </div>
          </StyledCardGroup>
        </li>
      ))}
    </List>
  );
};

export default GroupsList;
