import Cards from "../../components/Card";
import Header from "../../components/Header";
import { Container, Content } from "./style.js";
import { useContext, useEffect } from "react";
import { HabitsContext } from "../../providers/Habits";
import Modal from "../../components/Modal";
import { Typography } from "@material-ui/core";

const Dashboard = () => {
  const { habits, getHabits, editHabit, deleteHabit } =
    useContext(HabitsContext);

  console.log(habits);

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <Container>
      <Header></Header>
      <Content>
        {habits.length === 0 ? (
          <Typography>Nenhum hábito cadastrado</Typography>
        ) : (
          habits.map((habits, index) => {
            return (
              <Cards
                key={index}
                habits={habits}
                del={deleteHabit}
                edit={editHabit}
              />
            );
          })
        )}
      </Content>
      <Modal modalType="CreateHabit" />
    </Container>
  );
};

export default Dashboard;
