import DiagnalFog from "../common_components/diagnalFog";
import QuestionLayOut from "../common_components/questionLayOut";
import { useState } from "react";
import NextStep from "../common_components/nextStep";
import ChoiceInputLO from "../common_components/choiceInputLO";

const TriedMethodsToLW = () => {
  const [mehtodsToLW, setMethodsToLW] = useState([
    "Diets",
    "Home workouts",
    "Gym workouts",
    "Food supplements",
    "Fitness apps",
    "None",
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut
            questionText={"What methods have you tried to lose weight?"}
          />
          {mehtodsToLW.map((method, index) => {
            return (
              <ChoiceInputLO
                ChoiceText={method}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <NextStep toWhere={"/fitness/exerciseXP"} />
      </div>
    </>
  );
};

export default TriedMethodsToLW;
