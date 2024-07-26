import DiagnalFog from "../diagnalFog";
import NextStep from "../target_zone/nextStep";
import ImproveButton from "./improveButton";

const WhatToImprove = () => {
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex justify-center align-middle items-center ">
        <div className="w-3/6">
          <div className="z-50 text-4xl text-center p-10 mb-24 font-bold tracking-wider">
            What do you want to improve?
          </div>
          <div className="grid grid-cols-3 grid-rows-3">
            <ImproveButton name={"Develop mobility"} />
            <ImproveButton name={"Improve posture"} />
            <ImproveButton name={"Sleep better"} />
            <ImproveButton name={"better digestion"} />
            <ImproveButton name={"improve heart health"} />
            <ImproveButton name={"Form a healthy habit"} />
            <ImproveButton name={"Relieve stress"} />
            <ImproveButton name={"Boost libido"} />
            <ImproveButton name={"boost immune system"} />
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
