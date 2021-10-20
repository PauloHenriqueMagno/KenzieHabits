import Cards from "../../components/Card";
import Header from "../../components/Header";
import AddButton from "../../components/AddButton";
import Modal from "../../components/Modal";
import { Container, Content } from "./style.js";

const Dashboard = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <Cards></Cards>
      </Content>
      <AddButton> </AddButton>
      <Modal modalType="addHabit" />
    </Container>
  );
};

export default Dashboard;
