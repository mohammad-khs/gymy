import CustomParticles from "./customParticles";
import TopProgressBar from "./topProgressBar";


const Subject = () => {
  return (
    <>
      <div className="z-0">
        <CustomParticles />
      </div>
      <div className="">
        <div className="h-screen flex flex-col justify-between ">
          <div
            className="z-10 bg-white h-1/5 w-full"
            style={{
              webkitBoxShadow: "1px 100px 100px #ffffff",
              mozBoxShadow: "1px 100px 100px #ffffff",
              boxShadow: "1px 100px 100px #ffffff",
            }}
          ></div>
          <div
            className="z-10 bg-white h-1/5 w-full"
            style={{
              webkitBoxShadow: "1px -100px 100px #ffffff",
              mozBoxShadow: "1px -100px 100px #ffffff",
              boxShadow: "1px -100px 100px #ffffff",
            }}
          ></div>
        </div>
      </div>
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
            <h1 className="text-orange-400 text-center text-7xl m-14 font-bold tracking-wider">
              Cycle-based fitness <br />
              plan for women
            </h1>
            <div className="text-2xl mb-10">
              that works with, not agianst, your life style
            </div>
            <button
              type="button"
              className="tracking-wider rounded-2xl  px-16 py-2 border-2 mt-28 text-2xl bg-slate-500 transition-colors hover:bg-orange-400 hover:border-slate-500 text-white  border-orange-400"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subject;
