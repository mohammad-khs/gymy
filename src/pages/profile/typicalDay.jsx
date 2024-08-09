import { useState } from "react";
import QuestionLayOut from "../common_components/questionLayOut";
import DiagnalFog from "../common_components/diagnalFog";
import ChoiceInputImgLO from "../common_components/choiceInputImgLO";
import { Link } from "react-router-dom";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const TypicalDay = () => {
  const [typicalDays, setTypicalDays] = useState([
    {
      choiceTitle: "Sedentary",
      choiceFootNote: "I spend most of the day sitting",
    },
    {
      choiceTitle: "Moderate activity",
      choiceFootNote: "I take active breaks",
    },
    {
      choiceTitle: "I'm unstoppable",
      choiceFootNote: "I'm on my feet all day long",
    },
  ]);
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut
            questionText={"How would you describe your typical day?"}
          />
          {typicalDays.map((typicalDay, index) => {
            return (
              <Link to={"/profile/mealPreferences"} key={index}>
                <ChoiceInputImgLO
                  noInput={true}
                  choiceTitle={typicalDay.choiceTitle}
                  choiceFootNote={typicalDay.choiceFootNote}
                  index={index}
                />
              </Link>
            );
          })}
        </div>
        <BottomProgressBars profileValue={1} />
      </div>
    </>
  );
};

export default TypicalDay;
