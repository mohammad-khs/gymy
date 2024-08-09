import DiagnalFog from "../common_components/diagnalFog";
import QuestionLayOut from "../common_components/questionLayOut";
import { useState } from "react";
import NextStep from "../common_components/nextStep";
import ChoiceInputLO from "../common_components/choiceInputLO";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const Habits = () => {
  const [mehtodsToLW, setMethodsToLW] = useState([
    "I eat late at night",
    "I can't give up eating sweets",
    "I love soft drinks",
    "I consume hard drinks sometimes",
    "I love fatty or salty food",
    "None of the above",
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut
            questionText={"Do you have any of the following habits?"}
          />
          {mehtodsToLW.map((method, index) => {
            return (
              <ChoiceInputLO ChoiceText={method} index={index} key={index} />
            );
          })}
        </div>
        <NextStep toWhere={"/profile/sideActivities"} />
        <BottomProgressBars profileValue={4} />
      </div>
    </>
  );
};

export default Habits;
