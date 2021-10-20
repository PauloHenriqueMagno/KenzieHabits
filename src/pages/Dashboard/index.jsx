import Cards from "../../components/Card";
import Header from "../../components/Header";
import { Container } from "./style.js";
import { useContext, useEffect } from "react";
import { HabitsContext } from "../../providers/Habits";
import Modal from "../../components/Modal";
const Dashboard = () => {
  const { habits, getHabits, editHabit, deleteHabit } =
    useContext(HabitsContext);

  console.log(habits);

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <>
      <Header></Header>
      <Container>
        {habits.map((habits, index) => (
          <Cards
            key={index}
            habits={habits}
            del={deleteHabit}
            edit={editHabit}
          />
        ))}
      </Container>
      <Modal modalType="CreateHabit" />
    </>
  );
};

export default Dashboard;
