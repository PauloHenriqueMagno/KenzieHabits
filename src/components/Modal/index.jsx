import BasicModal from "./import";
import { allData } from "./data";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { HabitsContext } from "../../providers/Habits/index";
import { UserGroupsContext } from "../../providers/UserGroups";
import { GroupsContext } from "../../providers/Groups";
import { GoalsContext } from "../../providers/Goals";
import { ActivitiesContext } from "../../providers/Activities";

const Modal = ({ modalType, habitId, groupId, goalId, activityId }) => {
  const { addHabit, editHabit } = useContext(HabitsContext);
  const { editUser } = useContext(UserContext);
  const { createGroup } = useContext(GroupsContext);
  const { editGroup } = useContext(UserGroupsContext);
  const { createGoal, editGoal } = useContext(GoalsContext);
  const { createActivity, editActivity } = useContext(ActivitiesContext);

  console.log();
  return modalType === allData[0].search ? (
    <BasicModal Data={allData[0]} apiAction={addHabit} />
  ) : modalType === allData[1].search ? (
    <BasicModal Data={allData[1]} apiAction={editHabit} habitId={habitId} />
  ) : modalType === allData[2].search ? (
    <BasicModal Data={allData[2]} apiAction={editUser} />
  ) : modalType === allData[3].search ? (
    <BasicModal Data={allData[3]} apiAction={createGroup} />
  ) : modalType === allData[4].search ? (
    <BasicModal Data={allData[4]} apiAction={editGroup} groupId={groupId} />
  ) : modalType === allData[5].search ? (
    <BasicModal Data={allData[5]} apiAction={createGoal} groupId={groupId} />
  ) : modalType === allData[6].search ? (
    <BasicModal Data={allData[6]} apiAction={editGoal} goalId={goalId} />
  ) : modalType === allData[7].search ? (
    <BasicModal Data={allData[7]} apiAction={createActivity} />
  ) : modalType === allData[8].search ? (
    <BasicModal
      Data={allData[8]}
      apiAction={editActivity}
      activityId={activityId}
    />
  ) : null;
};

export default Modal;
