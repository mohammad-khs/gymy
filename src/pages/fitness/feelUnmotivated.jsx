import { useState } from "react";
import DiagnalFog from "../common_components/diagnalFog";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";
import GoalChoiceLayout from "../goals/goalChoiceLayout";
import { Link } from "react-router-dom";
import ChoiceInputLO from "../common_components/choiceInputLO";

const FeelUnmotivated = () => {
  const [ReasonList, setReasonList] = useState([
    "Didn't have a clear effective plan",
    "My workouts were to hard",
    "Didn't have the time to exercise",
    "Bad coaching",
    "Didn't see any progress",
    "No, i was motivated",
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut
            questionText={"Why did you feel unmotivated to exercise?"}
          />
          {ReasonList.map((Reason, index) => {
            return <ChoiceInputLO ChoiceText={Reason} key={index} />;
          })}
        </div>
        <NextStep toWhere={"/fitness/workoutTypes"} />
      </div>
    </>
  );
};

export default FeelUnmotivated;
