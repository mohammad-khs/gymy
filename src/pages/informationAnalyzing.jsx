import { Link } from "react-router-dom";
import TopProgressBar from "./common_components/topProgressBar";
import TopBottomFog from "./common_components/topBottomFog";
import Continue from "./common_components/continue";
import StagePageTitle from "./common_components/stagePageTitle";
import StagePageMain from "./common_components/stagePageMain";
import VerticalFog from "./common_components/verticalFog";

const InformaitonAnalyzing = () => {
  return (
    <>
      <TopBottomFog />
      <VerticalFog />
      <div className="absolute w-full h-full bg-transparent left-0 top-0">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
            <TopProgressBar goals={"X"} fitness={"X"} profile={"X"} healthAndCycle={"X"} />
            <StagePageTitle
            smallText={true}
              firstLine={"Thank you for your help, now we will "}
              secondLine={"analyze you information quickly"}
            />
            <StagePageMain
              text={"that works with, not agianst, your life style"}
            />
            <Link className="mt-28" to={"/"}>
              <Continue />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformaitonAnalyzing;