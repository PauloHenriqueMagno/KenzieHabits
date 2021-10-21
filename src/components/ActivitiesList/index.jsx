import Modal from "../Modal/index";
import { Delete } from "@material-ui/icons";
import { container } from "./styles";
import { Box } from "@material-ui/core";
import { theme } from "./styles";
import { ThemeProvider } from "@material-ui/core";
import { ActivitiesContext } from "../../providers/Activities";
import { useContext } from "react";

const ActivitiesList = ({ activities }) => {
  const { removeActivity } = useContext(ActivitiesContext);
  const deleteActivity = (activityId) => {
    removeActivity(activityId);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={container}>
        {activities.sort((a, b) => a.id - b.id).map((activity) => {
          return (
            <div className="activityContainer" key={activity.id}>
              <div className="activityContent">
                <p>{activity.title}</p>
                <p>{activity.realization_time}</p>
              </div>
              <div className="activityActions">
                <Delete onClick={() => deleteActivity(activity.id)} />
                <Modal modalType="UpdateActivity" activityId={activity.id} />
              </div>
            </div>
          );
        })}
      </Box>
    </ThemeProvider>
  );
};

export default ActivitiesList;
