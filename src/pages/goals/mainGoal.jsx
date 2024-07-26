import CustomParticles from "../customParticles";
import loseWeight from "../../assets/loseWeight.png";
import GoalChoiceLayout from "./goalChoiceLayout";
import stayFit from "../../assets/stayFit.png";
import buildMuscle from "../../assets/buildMuscle.png";
import DiagnalFog from "./diagnalFog";
import { Link } from "react-router-dom";
const MainGoal = () => {
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex justify-center align-middle items-center">
        <div className="w-2/5">
          <div className="text-4xl text-center p-10 mb-24 font-bold tracking-wider">
            What is your main goal?
          </div>
          <Link to={"/goals/bodyDescription"}>
            <GoalChoiceLayout goal={"Lose weight"} img={loseWeight} />
          </Link>
          <Link to={"/goals/bodyDescription"}>
          <GoalChoiceLayout goal={"Stay fit"} img={stayFit} />
          </Link>
          <Link to={"/goals/bodyDescription"}>
          <GoalChoiceLayout goal={"Build muscle"} img={buildMuscle} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainGoal;
