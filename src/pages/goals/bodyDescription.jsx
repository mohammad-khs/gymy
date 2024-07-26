import CustomParticles from "../customParticles";
import DiagnalFog from "./diagnalFog";
import Slim from "../../assets/slim.png";
import MidSized from "../../assets/midSized.png";
import Plump from "../../assets/plump.png";
import OverWeight from "../../assets/overWeight.png";
import { Link } from "react-router-dom";
import GoalChoiceLayout from "./goalChoiceLayout";
const BodyDescription = () => {
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex justify-center align-middle items-center">
        <div className="w-2/5">
          <div className="text-4xl text-center p-10 mb-24 font-bold tracking-wider">
            How would you describe your body?
          </div>
          <Link to={"/goals/dreamBody"}>
            <GoalChoiceLayout goal={"Slim"} img={Slim} />
          </Link>
          <Link to={"/goals/dreamBody"}>
            <GoalChoiceLayout goal={"Mid-sized"} img={MidSized} />
          </Link>
          <Link to={"/goals/dreamBody"}>
            <GoalChoiceLayout goal={"Plump"} img={Plump} />
          </Link>
          <Link to={"/goals/dreamBody"}>
            <GoalChoiceLayout goal={"Overweight"} img={OverWeight} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BodyDescription;
