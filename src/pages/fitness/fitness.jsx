import { Link } from "react-router-dom";
import TopProgressBar from "../common_components/topProgressBar";
import TopBottomFog from "../common_components/topBottomFog";
import Continue from "../common_components/continue";

const Fitness = () => {
  return (
    <>
      <TopBottomFog />
      <div className="z-20 absolute w-full h-full bg-transparent left-0 top-0">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div
            className="flex flex-col justify-center items-center bg-white"
            style={{
              webkitBoxShadow: "0px 0px 100px 100px #ffffff",
              mozBoxShadow: "0px 0px 100px 100px #ffffff",
              boxShadow: "0px 0px 100px 100px #ffffff",
            }}
          >
            <TopProgressBar fitness={"FITNESS"} />
            <h1 className="text-mehranaOrange text-center text-7xl m-14 font-bold tracking-wider">
              We know how to
              <br />
              lose weight
            </h1>
            <div className="text-2xl mb-10">
              Are you friends with fitness? lets find out
            </div>
            <Link className="mt-28" to={"/fitness/triedMethodsToLW"}>
              <Continue />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fitness;
