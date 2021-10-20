import "./App.css";
import Routes from "./routes";
import Footer from "./components/Footer";
import ActivitiesList from "./components/ActivitiesList/index";

function App() {
  return (
    <>
      <ActivitiesList group={{
  "id": 340,
  "name": "quarta 20/10 14:56",
  "description": "quarta 20/10 14:56",
  "category": "quarta 20/10 14:56",
  "creator": {
    "id": 14,
    "username": "asdf",
    "email": "qualqueremail@gmail.com"
  },
  "users_on_group": [
    {
      "id": 14,
      "username": "asdf",
      "email": "qualqueremail@gmail.com"
    }
  ],
  "goals": [],
  "activities": [
    {
      "id": 358,
      "title": "quarta 20/10 14:58",
      "realization_time": "2021-10-18T18:47:00Z",
      "group": 340
    },
    {
      "id": 362,
      "title": "quarta 20/10 15:05",
      "realization_time": "2021-10-18T18:47:00Z",
      "group": 340
    }
  ]
}}/>
      <Routes />
      <Footer />
    </>
  );
}

export default App;
