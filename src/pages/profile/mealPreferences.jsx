import { useState } from "react";
import glutenFree from "../../assets/glutenFree.jpg";
import lactoseFree from "../../assets/lactoseFree.jpg";
import none from "../../assets/none.jpg";
import vegan from "../../assets/vegan.jpg";
import vegetarian from "../../assets/vegetarian.jpg";
import ChoiceInputImgLO from "../common_components/choiceInputImgLO";
import DiagnalFog from "../common_components/diagnalFog";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const MealPreferences = () => {
  const [meals, setMeals] = useState([
    {
      img: vegetarian,
      choiceTitle: "I am vegetarian",
      choiceFootNote: "Reduce stress and bring balance to your life",
    },
    {
      img: vegan,
      choiceTitle: "I am vegan",
      choiceFootNote: "Relax and strengthen your muscles",
    },
    {
      img: glutenFree,
      choiceTitle: "Gluten-free",
      choiceFootNote: "Fine-tune your muscles, even the hidden ones",
    },
    {
      img: lactoseFree,
      choiceTitle: "Lact",
      choiceFootNote: "Fine-tune your muscles, even the hidden ones",
    },
    {
      img: none,
      choiceTitle: "Barre",
      choiceFootNote: "Fine-tune your muscles, even the hidden ones",
    },
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut questionText={"What is your meal preferences?"} />
          {meals.map((meal, index) => {
            return (
              <ChoiceInputImgLO
                img={meal.img}
                choiceTitle={meal.choiceTitle}
                choiceFootNote={meal.choiceFootNote}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <NextStep toWhere={"/profile/mealsADay"} />
        <BottomProgressBars profileValue={2} />
      </div>
    </>
  );
};

export default MealPreferences;
