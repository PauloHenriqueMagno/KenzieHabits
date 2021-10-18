import Cards from "../../components/Card";
import Header from "../../components/Header";
import AddButton from "../../components/AddButton";
import { Container } from "./style.js";

const Dashboard = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Cards></Cards>
      </Container>
      <AddButton></AddButton>
    </>
  );
};

export default Dashboard;
