import TopBottomFog from "../topBottomFog";
import FullBody from "../../../assets/fullBody.jpg";
import TargetZoneButton from "./targetZoneButton";
import { useState } from "react";
import NextStep from "./nextStep";
const TargetZones = () => {
  const [allBody, setAllBody] = useState(false);
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
            <div className="text-4xl text-center p-10 mb-24 font-bold tracking-wider">
              What is your dream body?
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col justify-around">
                <TargetZoneButton name={"Breasts"} allBody={allBody} />
                <TargetZoneButton name={"Arms"} allBody={allBody} />
                <TargetZoneButton name={"Belly"} allBody={allBody} />
                <TargetZoneButton name={"Butt"} allBody={allBody} />
                <TargetZoneButton name={"Legs"} allBody={allBody} />
              </div>
              <div className="">
                <img src={FullBody} width={400} alt="full-body" className="" />
              </div>
              <div className="grid grid-rows-6">
                <label className="flex flex-col row-span-3 justify-center items-center gap-3 cursor-pointer">
                  <div className="text-2xl  font-medium text-mehranaOrange">
                    Full body
                  </div>
                  <input
                    type="checkbox"
                    onClick={(e) =>
                      setAllBody((allBody) => (allBody = !allBody))
                    }
                    value={allBody}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 rounded-full peer bg-mehranaDarkGray peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:peer-checked:bg-mehranaOrange after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
            <NextStep toWhere={"/goals/whatToImprove"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetZones;
