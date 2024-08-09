import Gender from "./gender";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import VerticalFog from "../common_components/verticalFog";
import { useState } from "react";
const GenderSelection = () => {
  const [genders, setGenders] = useState([
    { Img: female, gender: "Female" },
    { Img: male, gender: "Male" },
  ]);
  return (
    <>
      <VerticalFog />
      <div className=" h-screen justify-center items-center flex">
        <div
          className="w-2/5 flex z-0 flex-col justify-center items-center bg-mehranaDarkGray rounded-3xl"
          style={{ boxShadow: "grey 0px 0px 5px 10px  inset" }}
        >
          <div className="mb-40 text-4xl p-10 font-bold tracking-wider text-white">
            Select your gender
          </div>
          <div className="flex justify-around w-full mb-10">
            {genders.map((gender, index) => {
              return (
                <Gender
                  imgPath={gender.Img}
                  gender={gender.gender}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GenderSelection;
