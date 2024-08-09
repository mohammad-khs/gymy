import { Link } from "react-router-dom";
import DiagnalFog from "../common_components/diagnalFog";
import GoalChoiceLayout from "./goalChoiceLayout";
import Thin from "../../assets/thin.png";
import BikiniBody from "../../assets/bikiniBody.png";
import Toned from "../../assets/toned.png";
import ImOkBody from "../../assets/imOkBody.png";
import { useState } from "react";
import QuestionLayOut from "../common_components/questionLayOut";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";
const DreamBody = () => {
  const [dreamBodyList, setDreamBodyList] = useState([
    { dreamName: "Thin", dreamImg: Thin },
    { dreamName: "Toned", dreamImg: Toned },
    { dreamName: "Bikini body", dreamImg: BikiniBody },
    { dreamName: "I'm ok with my body", dreamImg: ImOkBody },
  ]);
  return (
    <>
      <DiagnalFog />

      <div className="h-screen flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut questionText={"What is your dream body?"} />
          {dreamBodyList.map((dream, index) => {
            return (
              <Link to={"/goals/targetZones"} key={index}>
                <GoalChoiceLayout goal={dream.dreamName} img={dream.dreamImg} />
              </Link>
            );
          })}
        </div>
        <BottomProgressBars goalValue={3} />
      </div>
    </>
  );
};

export default DreamBody;
