import { useState } from "react";
import DiagnalFog from "../common_components/diagnalFog";
import QuestionLayOut from "../common_components/questionLayOut";
import GoalChoiceLayout from "../goals/goalChoiceLayout";
import { Link } from "react-router-dom";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const EffectsOnActivity = () => {
  const [effections, setEffections] = useState([
    "Yes, it does!",
    "No, not really",
    "it depends",
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut questionText={"Does your cycle usually effect your activity levels?"} />
          {effections.map((effect, index) => {
            return (
              <Link to={"/healthCycle/periodDuration"} key={index}>
                <GoalChoiceLayout goal={effect} />
              </Link>
            );
          })}
        </div>
        <BottomProgressBars healthValue={4} />
      </div>
    </>
  );
};

export default EffectsOnActivity;
