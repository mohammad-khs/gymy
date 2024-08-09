import { useState } from "react";
import QuestionLayOut from "../common_components/questionLayOut";
import DiagnalFog from "../common_components/diagnalFog";
import NextStep from "../common_components/nextStep";
import ChoiceInputImgLO from "../common_components/choiceInputImgLO";
import RunninWoman from "../../assets/runningWoman.png";
import CardioWoman from "../../assets/cardioWoman.png";
import SquatWoman from "../../assets/squatWoman.png";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const WorkoutTypes = () => {
  const [workTypeList, setWorkoutTypes] = useState([
    {
      img: RunninWoman,
      choiceTitle: "Strength",
      choiceFootNote: "Work those muscles to get stronger",
    },
    {
      img: CardioWoman,
      choiceTitle: "Circuits",
      choiceFootNote: "Burn fat, lose weight, and gain muscle",
    },
    {
      img: SquatWoman,
      choiceTitle: "HIIT",
      choiceFootNote: "Intense workout to get your heart rate up",
    },
    {
      img: RunninWoman,
      choiceTitle: "Cardio",
      choiceFootNote: "Essential workout to burn a lot of calories",
    },
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut
            questionText={"Choose workout types for your fitness plan?"}
          />
          {workTypeList.map((workout, index) => {
            return (
              <ChoiceInputImgLO
                img={workout.img}
                choiceTitle={workout.choiceTitle}
                choiceFootNote={workout.choiceFootNote}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <NextStep toWhere={"/fitness/restorativePlans"} />
        <BottomProgressBars fitnessValue={5} />
      </div>
    </>
  );
};

export default WorkoutTypes;
