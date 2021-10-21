import { useContext, useEffect } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import Modal from "../Modal/index";
import { container } from "./styles";
import { Box } from "@material-ui/core";
import { theme } from "./styles";
import { ThemeProvider } from "@material-ui/core";

const ActivitiesList = ({ group }) => {
  const { activities, getActivities } = useContext(ActivitiesContext);
  useEffect(() => {
    getActivities(group.id);
  }, []);
  console.log(activities.data?.results);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={container}>
        <div className="titleContainer">
          <h4>Atividades do grupo - {group.name} </h4>
          <Modal modalType="CreateActivity" />
        </div>
        {/* activities.map(activity => {}) */}
        <div className="activityContainer">
          <div>
            <span>{group.activities[0].title}</span>
            <span>{group.activities[0].realization_time}</span>
          </div>
          <div>
            <Modal modalType="UpdateActivity" />
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default ActivitiesList;
