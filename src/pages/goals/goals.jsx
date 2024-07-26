import { Link } from "react-router-dom";
import TopProgressBar from "../topProgressBar";
import TopBottomFog from "./topBottomFog";

const Goals = () => {
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
            <TopProgressBar goals={"GOALS"} />
            <h1 className="text-mehranaOrange text-center text-7xl m-14 font-bold tracking-wider">
              Cycle-based fitness <br />
              plan for women
            </h1>
            <div className="text-2xl mb-10">
              that works with, not agianst, your life style
            </div>
            <Link to={"/goals/mainGoal"}>
              <button
                type="button"
                className="tracking-wider rounded-2xl  px-16 py-2 border-2 mt-28 text-2xl bg-mehranaGray transition-colors hover:bg-mehranaOrange hover:border-mehranaGray text-white  border-mehranaOrange"
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
