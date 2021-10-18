import {HomeSection} from "./styled"
import { useHistory } from "react-router-dom"
import Modal from "../../components/Modal/index"

const Home = () => {
    const history = useHistory()

    return (
        <HomeSection>
            <img alt="background_image" />
            <div className="container">
                <div className="content">
                    <p>
                        Comece a organizar
                        seus hábitos
                        agora mesmo
                    </p>
                    <Modal modalType="CreateHabit"/>
                    <Modal modalType="EditUserName"/>
                    <Modal modalType="CreateGroup"/>
                    <Modal modalType="UpdateGroup"/>
                    <Modal modalType="UpdateHabit"/>
                    <button onClick={()=> history.push("/signup")}>
                        Inscrever-se
                    </button>
                </div>
            </div>
        </HomeSection>
    )
}

export default Home;