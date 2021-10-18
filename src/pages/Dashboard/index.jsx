import Cards from "../../components/Card";
import Header from "../../components/Header";
import { Container } from "./style.js";

const Dashboard = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Cards></Cards>
      </Container>
    </>
  );
};

export default Dashboard;
