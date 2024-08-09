import { useState } from "react";
import ChoiceInputImgLO from "../common_components/choiceInputImgLO";
import DiagnalFog from "../common_components/diagnalFog";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";
import RunningWoman from "../../assets/runningWoman.png";
import CardioWoman from "../../assets/cardioWoman.png";
import SquatWoman from "../../assets/squatWoman.png";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const RestorativePlans = () => {
  const [restorativePlanList, setRestorativePlanList] = useState([
    {
      img: RunningWoman,
      choiceTitle: "Yoga",
      choiceFootNote: "Reduce stress and bring balance to your life",
    },
    {
      img: CardioWoman,
      choiceTitle: "Pilates",
      choiceFootNote: "Relax and strengthen your muscles",
    },
    {
      img: SquatWoman,
      choiceTitle: "Barre",
      choiceFootNote: "Fine-tune your muscles, even the hidden ones",
    },
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut
            questionText={"Choose restorative workouts for your fitness plan?"}
          />
          {restorativePlanList.map((restorativePlan, index) => {
            return (
              <ChoiceInputImgLO
                img={restorativePlan.img}
                choiceTitle={restorativePlan.choiceTitle}
                choiceFootNote={restorativePlan.choiceFootNote}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <NextStep toWhere={"/fitness/workoutDays"} />
        <BottomProgressBars fitnessValue={6} />
      </div>
    </>
  );
};

export default RestorativePlans;
