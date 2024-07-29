import loseWeight from "../../assets/loseWeight.png";
import GoalChoiceLayout from "./goalChoiceLayout";
import stayFit from "../../assets/stayFit.png";
import buildMuscle from "../../assets/buildMuscle.png";
import DiagnalFog from "../common_components/diagnalFog";
import { Link } from "react-router-dom";
import { useState } from "react";
import QuestionLayOut from "../common_components/questionLayOut";
const MainGoal = () => {
  const [mainGoalList, setMainGoalList] = useState([
    { mainGoalName: "Lose wieght", mainGoalImg: loseWeight },
    { mainGoalName: "Stay fit", mainGoalImg: stayFit },
    { mainGoalName: "Build muscle", mainGoalImg: buildMuscle },
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut questionText={" What is your main goal?"} />

          {mainGoalList.map((mainGoal, index) => {
            return (
              <Link to={"/goals/bodyDescription"}>
                <GoalChoiceLayout
                  goal={mainGoal.mainGoalName}
                  img={mainGoal.mainGoalImg}
                  key={index}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainGoal;
