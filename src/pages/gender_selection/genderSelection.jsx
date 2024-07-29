import Gender from "./gender";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import VerticalFog from "../common_components/verticalFog";
const GenderSelection = () => {
  return (
    <>
      <VerticalFog />
      <div className=" h-screen justify-center items-center flex">
        <div
          className="w-2/5 flex flex-col justify-center items-center bg-mehranaDarkGray rounded-3xl"
          style={{ boxShadow: "grey 0px 0px 5px 10px  inset" }}
        >
          <div className="mb-40 text-4xl  p-10 font-bold tracking-wider text-white">
            Select your gender
          </div>
          <div className="flex justify-around w-full mb-10">
            <Gender imgPath={female} gender="Female" />
            <Gender imgPath={male} gender="Male" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GenderSelection;
