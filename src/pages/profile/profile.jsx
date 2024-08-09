import { Link } from "react-router-dom";
import StagePageMain from "../common_components/stagePageMain";
import StagePageTitle from "../common_components/stagePageTitle";
import TopBottomFog from "../common_components/topBottomFog";
import TopProgressBar from "../common_components/topProgressBar";
import Continue from "../common_components/continue";
import VerticalFog from "../common_components/verticalFog";

const Profile = () => {
  return (
    <>
      <TopBottomFog />
      <VerticalFog />
      <div className="absolute w-full h-full bg-transparent left-0 top-0">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex flex-col w-3/6 justify-center items-center ">
            <TopProgressBar profile={"PROFILE"} />
            <StagePageTitle
              firstLine={"You're now in early luteal phase"}
              smallText={true}
            />
            <StagePageMain
              text={`Engage in a mix of strength training, cardio workouts, and yoga to support a
                 balanced approach. Moderate intensity exercises help maintain strength and endurance.`}
            />
            <Link className="mt-28" to={"/profile/typicalDay"}>
              <Continue />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
