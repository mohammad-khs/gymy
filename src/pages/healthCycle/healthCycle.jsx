import { Link } from "react-router-dom";
import StagePageMain from "../common_components/stagePageMain";
import StagePageTitle from "../common_components/stagePageTitle";
import TopBottomFog from "../common_components/topBottomFog";
import TopProgressBar from "../common_components/topProgressBar";
import Continue from "../common_components/continue";
import VerticalFog from "../common_components/verticalFog";

const HealthCycle = () => {
  return (
    <>
      <TopBottomFog />
      <VerticalFog />
      <div className="absolute w-full h-full bg-transparent left-0 top-0">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex flex-col w-3/6 justify-center items-center ">
            <TopProgressBar healthAndCycle={"HEALTH & CYCLE"} />
            <StagePageTitle
              firstLine={"Some fitness plans made"}
              secondLine={"for men don't work for women"}
              smallText={true}
            />
            <StagePageMain
              text={`HARNA will cync your fitness preferences with the nature of your body`}
            />
            <Link className="mt-28" to={"/healthCycle/menstrualCycle"}>
              <Continue />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthCycle;
