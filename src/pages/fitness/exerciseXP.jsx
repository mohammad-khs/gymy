import { useState } from "react";
import DiagnalFog from "../common_components/diagnalFog";
import QuestionLayOut from "../common_components/questionLayOut";
import GoalChoiceLayout from "../goals/goalChoiceLayout";
import { Link } from "react-router-dom";

const ExerciseXP = () => {
  const [durationList, setDurationList] = useState([
    "Just started this month",
    "From a month to 6 months",
    "From 6 months to a year",
    "For more than a year",
    "No, but used to in the past",
    "No, never have",
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut
            questionText={"Have you been doing any fit ness exercises?"}
          />
          {durationList.map((duration, index) => {
            return (
              <Link to={"/fitness/exerciseRoutine"}>
                <GoalChoiceLayout goal={duration} thin={true} key={index} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExerciseXP;
