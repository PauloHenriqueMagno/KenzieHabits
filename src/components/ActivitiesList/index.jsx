import { useContext, useEffect } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import Modal from "../Modal/index";

const ActivitiesList = ({ group }) => {
  const { activities, getActivities } = useContext(ActivitiesContext);
  useEffect(() => {
    getActivities(group.id);
  }, []);
  console.log(activities.data?.results);
  return (
    <div>
      <div>
        <h2>Atividades do grupo - {group.name} </h2>
      </div>
      {/* activities.map(activity => {}) */}
      <div>
        <div>
          <span>{group.activities[0].title}</span>
          <span>{group.activities[0].realization_time}</span>
        </div>
        <div>
          <Modal modalType="UpdateActivity" />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesList;
