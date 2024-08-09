import { useState } from "react";
import Calendar from "react-calendar";
import "./menstrualCycleCalendar.css";
import DiagnalFog from "../common_components/diagnalFog";
import QuestionLayOut from "../common_components/questionLayOut";
import NextStep from "../common_components/nextStep";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

function MenstrualCycle() {
  const [value, onChange] = useState(Date());
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut
            questionText={"Do you have any of the following habits?"}
          />
          <div className="text-mehranaYellow text-center my-5">
            your menstrual cycle began in{" "}
            {new Date().toLocaleDateString("en-GB")}
          </div>
          <div className="relative flex justify-center w-full">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
        <NextStep toWhere={"/healthCycle/periodDuration"} />
        <BottomProgressBars healthValue={1} />
      </div>
    </>
  );
}
export default MenstrualCycle;
