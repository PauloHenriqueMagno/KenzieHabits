import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";

const HabitsList = () => {
  const { habits } = useContext(HabitsContext);

  return (
    <>
      {habits.map((habits, index) => (
        <div key={index}>
          <span> {habits.category}</span>
          <p>
            <b> {habits.title}</b>
          </p>
          <p> {habits.difficulty}</p>
          <p> {habits.frequency}</p>
        </div>
      ))}
    </>
  );
};

export default HabitsList;
