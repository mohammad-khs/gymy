import loseWeight from "../../assets/loseWeight.png";
import GoalChoiceLayout from "./goalChoiceLayout";
import stayFit from "../../assets/stayFit.png";
import buildMuscle from "../../assets/buildMuscle.png";
import DiagnalFog from "../common_components/diagnalFog";
import { Link } from "react-router-dom";
import { useState } from "react";
import QuestionLayOut from "../common_components/questionLayOut";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";
const MainGoal = () => {
  const [mainGoalList, setMainGoalList] = useState([
    { mainGoalName: "Lose wieght", mainGoalImg: loseWeight },
    { mainGoalName: "Stay fit", mainGoalImg: stayFit },
    { mainGoalName: "Build muscle", mainGoalImg: buildMuscle },
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex flex-col justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut questionText={" What is your main goal?"} />

          {mainGoalList.map((mainGoal, index) => {
            return (
              <Link to={"/goals/bodyDescription"} key={index}>
                <GoalChoiceLayout
                  goal={mainGoal.mainGoalName}
                  img={mainGoal.mainGoalImg}
                />
              </Link>
            );
          })}
        </div>
        <BottomProgressBars goalValue={1} />
      </div>
    </>
  );
};

export default MainGoal;
