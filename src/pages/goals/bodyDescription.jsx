import DiagnalFog from "../common_components/diagnalFog";
import Slim from "../../assets/slim.png";
import MidSized from "../../assets/midSized.png";
import Plump from "../../assets/plump.png";
import OverWeight from "../../assets/overWeight.png";
import { Link } from "react-router-dom";
import GoalChoiceLayout from "./goalChoiceLayout";
import { useState } from "react";
import QuestionLayOut from "../common_components/questionLayOut";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";
const BodyDescription = () => {
  const [bodyDescription, setBodyDescription] = useState([
    { goalName: "slim", goalImg: Slim },
    { goalName: "Mid-sized", goalImg: MidSized },
    { goalName: "Plump", goalImg: Plump },
    { goalName: "Overweight", goalImg: OverWeight },
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut questionText={"How would you describe your body?"} />
          {bodyDescription.map((goal, index) => {
            return (
              <Link to={"/goals/dreamBody"} key={index}>
                <GoalChoiceLayout goal={goal.goalName} img={goal.goalImg} />
              </Link>
            );
          })}
        </div>
        <BottomProgressBars goalValue={2} />
      </div>
    </>
  );
};

export default BodyDescription;
