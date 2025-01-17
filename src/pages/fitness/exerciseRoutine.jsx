import { useState } from "react";
import DiagnalFog from "../common_components/diagnalFog";
import QuestionLayOut from "../common_components/questionLayOut";
import GoalChoiceLayout from "../goals/goalChoiceLayout";
import { Link } from "react-router-dom";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const ExerciseRoutine = () => {
  const [routineList, setRoutineList] = useState([
    "Daily",
    "3-4 times per week",
    "1-2 times per week",
    "Every now and then",
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut questionText={"How often do you workout?"} />
          {routineList.map((routine, index) => {
            return (
              <Link to={"/fitness/feelUnmotivated"} key={index}>
                <GoalChoiceLayout goal={routine} />
              </Link>
            );
          })}
        </div>
        <BottomProgressBars fitnessValue={3} />
      </div>
    </>
  );
};

export default ExerciseRoutine;
