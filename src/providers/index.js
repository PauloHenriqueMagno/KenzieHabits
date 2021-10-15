import { ActivitiesProvider } from "./Activities";
import { UserGroupsProvider } from "./UserGroups";
import { GroupsProvider } from "./Groups";
import { UserProvider } from "./User";
import { HabitsProvider } from "./Habits";

const Provider = ({ children }) => {
  return (
    <UserProvider>
      <UserGroupsProvider>
        <ActivitiesProvider>
          <GroupsProvider>
            <HabitsProvider>{children}</HabitsProvider>
          </GroupsProvider>
        </ActivitiesProvider>
      </UserGroupsProvider>
    </UserProvider>
  );
};

export default Provider;
