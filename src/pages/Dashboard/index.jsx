import Cards from "../../components/Card";
import Header from "../../components/Header";
import { Container, Content } from "./style.js";
import { useContext, useEffect } from "react";
import { HabitsContext } from "../../providers/Habits";
import Modal from "../../components/Modal";
const Dashboard = () => {
  const { habits, getHabits, editHabit, deleteHabit } =
    useContext(HabitsContext);

  console.log(habits);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));

    if(!!user){
      getHabits();
    };
  }, []);

  return (
    <Container>
      <Header></Header>
      <Content>
        {habits.map((habits, index) => (
          <Cards
            key={index}
            habits={habits}
            del={deleteHabit}
            edit={editHabit}
          />
        ))}
      </Content>
      <Modal modalType="CreateHabit" />
    </Container>
  );
};

export default Dashboard;
