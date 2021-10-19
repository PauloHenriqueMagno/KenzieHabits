import { HomeSection } from "./styled";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <HomeSection>
      <img alt="background_image" />
      <div className="container">
        <div className="content">
          <p>Comece a organizar seus hábitos agora mesmo</p>

          <button onClick={() => history.push("/signup")}>Inscrever-se</button>
        </div>
      </div>
    </HomeSection>
  );
};

export default Home;
