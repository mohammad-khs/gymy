import { useEffect, useRef, useState } from "react";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";
import DiagnalFog from "../common_components/diagnalFog";
import InputNumber from "../common_components/inputNumber";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";
import ToggleButton from "../common_components/toggleButton";
import tachometer from "../../assets/tachometer.svg";
const YourWeight = () => {
  const [isKg, setIsKg] = useState(true);
  const lbRef = useRef(null);
  const kgRef = useRef(null);
  const [kg, setKg] = useState("");
  const [lb, setLb] = useState("");
  const [kgValid, setKgValid] = useState(false);
  const [lbValid, setLbValid] = useState(false);

  useEffect(() => {
    if (isKg) {
      setLbValid(false);
      setLb("");
    } else {
      setKgValid(false);
      setKg("");
    }
  }, [isKg]);

  const handleLb = (e) => {
    setLb((lb) => (lb = e.target.value));
    if (
      lbRef.current.value < 10 ||
      lbRef.current.value > 1000 ||
      lbRef.current.value.length < 1
    ) {
      setLbValid(false);
    } else {
      setLbValid(true);
    }
  };
  const handleKg = (e) => {
    setKg((kg) => (kg = e.target.value));
    if (
      kgRef.current.value < 10 ||
      kgRef.current.value > 150 ||
      kgRef.current.value.length < 1
    ) {
      setKgValid(false);
    } else {
      setKgValid(true);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <DiagnalFog />
        <div className="h-screen flex-col flex justify-center align-middle items-center">
          <div className="w-2/5">
            <QuestionLayOut questionText={"What's your weight?"} />

            <ToggleButton
              optionOne={"kg"}
              optionTwo={"lb"}
              setToggleBoolean={setIsKg}
              toggleBoolean={isKg}
            />
            {isKg ? (
              <div
                className={`text-lg my-7 text-mehranaYellow ${
                  kgValid || kg == "" ? "opacity-0" : "opacity-100"
                } transition-all text-center my-2`}
              >
                Enter a valid weight kg
              </div>
            ) : (
              <div
                className={`text-lg my-7 text-mehranaYellow ${
                  lbValid || lb == "" ? "opacity-0" : "opacity-100"
                } transition-all text-center my-2`}
              >
                Enter a valid weight lb
              </div>
            )}

            {isKg ? (
              <InputNumber
                placeholder="kg"
                handleNumber={handleKg}
                number={kg}
                inputRef={kgRef}
              />
            ) : (
              <InputNumber
                placeholder={"lb"}
                handleNumber={handleLb}
                number={lb}
                inputRef={lbRef}
              />
            )}
            <div className="flex relative justify-center my-4">
              <div className="w-3/5 bg-gradient-to-b rounded-lg from-mehranaOrange to-white my-5 mx-10 p-1">
                <div className="flex p-3 border-2 rounded-lg border-white">
                  <img
                    src={tachometer}
                    height={80}
                    width={80}
                    alt="tachometer"
                  />
                  <div className="ms-5 my-2">
                    <div className="text-2xl text-white my-2 tracking-wider">
                      Your BMI is 0, which is considered normal
                    </div>
                    <div className="text-mehranaDarkBlue text-sm my-2 ">
                      You are doing a great job keeping your weight in the
                      normal range. we will use your index to tailor a presonal
                      plan to your needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <NextStep
            valid={isKg ? kgValid : lbValid}
            toWhere={"/healthCycle"}
          />
          <BottomProgressBars profileValue={8} />
        </div>
      </form>
    </>
  );
};
export default YourWeight;
