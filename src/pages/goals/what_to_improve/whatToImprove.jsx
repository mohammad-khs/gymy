import { useState } from "react";
import DiagnalFog from "../../common_components/diagnalFog";
import NextStep from "../../common_components/nextStep";
import ImproveButton from "./improveButton";
import QuestionLayOut from "../../common_components/questionLayOut";

const WhatToImprove = () => {
  const [imporveOptions, setImporveOptions] = useState([
    "Develop mobility",
    "Improve posture",
    "Sleep better",
    "better digestion",
    "improve heart health",
    "Form a healthy habit",
    "Relieve stress",
    "Boost libido",
    "boost immune system",
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex justify-center align-middle items-center ">
        <div className="w-3/6">
          <QuestionLayOut questionText={"What do you want to improve?"} />
          <div className="grid grid-cols-3 grid-rows-3">
            {imporveOptions.map((improveOption, index) => {
              return <ImproveButton name={improveOption} key={index} />;
            })}
          </div>
          <div className="flex justify-center mt-24 ">
            <NextStep toWhere={"/fitness"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatToImprove;
