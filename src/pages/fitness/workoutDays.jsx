import { useState } from "react";
import DiagnalFog from "../common_components/diagnalFog";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";
import Triangle from "../common_components/triangle";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const WorkoutDays = () => {
  const [weekDays, setWeekDays] = useState([
    "Sunday",
    "Tuesday",
    "monday",
    "Thursday",
    "Wednesday",
    "Saturday",
    "Friday",
  ]);
  function handleWeekDays(index, day) {
    if (index <= 1) {
      return <Triangle day={day} key={index} />;
    } else if (index > 1 && index % 2 === 0) {
      return <Triangle day={day} key={index} rotate={true} />;
    } else {
      return <Triangle day={day} key={index} />;
    }
  }
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut
            questionText={"Choose restorative workouts for your fitness plan"}
            questionFootNote={"Choose at least 2 days for a workout"}
          />
        </div>
        <div className="flex">
          {weekDays.map((day, index) => {
            return handleWeekDays(index, day);
          })}
        </div>
        <NextStep toWhere={"/profile"} />
        <BottomProgressBars fitnessValue={7} />
      </div>
    </>
  );
};

export default WorkoutDays;
