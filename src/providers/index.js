import { ActivitiesContext } from "./Activities";
import { UserGroupsContext } from "./UserGroups";
import { GroupsContext } from "./Groups";
import { UserContext } from "./User";
import { HabitsContext } from "./Habits";

const Provider = ({ children }) => {
  return (
    <UserContext>
      <UserGroupsContext>
        <ActivitiesContext>
          <GroupsContext>
            <HabitsContext>{children}</HabitsContext>
          </GroupsContext>
        </ActivitiesContext>
      </UserGroupsContext>
    </UserContext>
  );
};

export default Provider;
