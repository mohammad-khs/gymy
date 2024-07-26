import { Link } from "react-router-dom";
import DiagnalFog from "./diagnalFog";
import GoalChoiceLayout from "./goalChoiceLayout";
import Thin from "../../assets/thin.png";
import BikiniBody from "../../assets/bikiniBody.png";
import Toned from "../../assets/toned.png";
import ImOkBody from "../../assets/imOkBody.png";
const DreamBody = () => {
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex justify-center align-middle items-center">
        <div className="w-2/5">
          <div className="text-4xl text-center p-10 mb-24 font-bold tracking-wider">
            What is your dream body?
          </div>
          <Link to={"/goals/targetZones"}>
            <GoalChoiceLayout goal={"Thin"} img={Thin} />
          </Link>
          <Link to={"/goals/targetZones"}>
            <GoalChoiceLayout goal={"Toned"} img={Toned} />
          </Link>
          <Link to={"/goals/targetZones"}>
            <GoalChoiceLayout goal={"Bikini body"} img={BikiniBody} />
          </Link>
          <Link to={"/goals/targetZones"}>
            <GoalChoiceLayout goal={"I'm ok with my body"} img={ImOkBody} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DreamBody;
