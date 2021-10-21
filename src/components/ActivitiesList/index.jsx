import Modal from "../Modal/index";
import { Delete } from "@material-ui/icons";
import { container } from "./styles";
import { Box } from "@material-ui/core";
import { theme } from "./styles";
import { ThemeProvider } from "@material-ui/core";

const ActivitiesList = ({ group: { activities } }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={container}>
        {activities.map((activity) => {
          return (
            <div className="activityContainer">
              <div className="activityContent">
                <p>{activity.title}</p>
                <p>{activity.realization_time}</p>
              </div>
              <div className="activityActions">
                <Delete />
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
