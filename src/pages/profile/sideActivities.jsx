import { useState } from "react";
import dog from "../../assets/dog.png";
import baby from "../../assets/baby.png";
import stairs from "../../assets/stairs.png";
import house from "../../assets/house.png";
import ChoiceInputImgLO from "../common_components/choiceInputImgLO";
import DiagnalFog from "../common_components/diagnalFog";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const SideActivities = () => {
  const [sideActivities, setSideActivities] = useState([
    {
      img: dog,
      choiceTitle: "I go walking with my pet",
    },
    {
      img: baby,
      choiceTitle: "A lot of active time with my child",
    },
    {
      img: stairs,
      choiceTitle: "Climb up the stairs a lot",
    },
    {
      img: house,
      choiceTitle: "Do a lot of househould stuff",
    },
    {
      img: null,
      choiceTitle: "None",
    },
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut questionText={"What is your meal preferences?"} />
          {sideActivities.map((sideActivity, index) => {
            return (
              <ChoiceInputImgLO
                img={sideActivity.img}
                choiceTitle={sideActivity.choiceTitle}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <NextStep toWhere={"/profile/yourAge"} />
        <BottomProgressBars profileValue={5} />
      </div>
    </>
  );
};

export default SideActivities;
