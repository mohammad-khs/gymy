import { useState } from "react";
import BottomProgressBar from "./bottomProgressBar";

const BottomProgressBars = ({
  goalValue,
  fitnessValue,
  profileValue,
  healthValue,
}) => {
  return (
    <>
      <div className="flex flex-row gap-4 absolute bottom-0 justify-center">
        <BottomProgressBar
          key={1}
          max={5}
          value={goalValue}
          unavailable={goalValue ? false : true}
          finished={fitnessValue || profileValue || healthValue ? true : false}
        />
        <BottomProgressBar
          key={2}
          max={7}
          value={fitnessValue}
          unavailable={fitnessValue ? false : true}
          finished={profileValue || healthValue ? true : false}
        />
        <BottomProgressBar
          key={3}
          max={8}
          value={profileValue}
          unavailable={profileValue ? false : true}
          finished={healthValue ? true : false}
        />
        <BottomProgressBar
          key={4}
          max={4}
          value={healthValue}
          unavailable={healthValue ? false : true}
        />
      </div>
    </>
  );
};

export default BottomProgressBars;
