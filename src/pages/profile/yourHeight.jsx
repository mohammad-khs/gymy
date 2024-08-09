import { useEffect, useRef, useState } from "react";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";
import DiagnalFog from "../common_components/diagnalFog";
import InputNumber from "../common_components/inputNumber";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";
import ToggleButton from "../common_components/toggleButton";

const YourHeight = () => {
  const [isCm, setIsCm] = useState(true);
  const inputRef = useRef(null);
  const inchRef = useRef(null);
  const footRef = useRef(null);
  const [cm, setCm] = useState("");
  const [inch, setInch] = useState("");
  const [foot, setFoot] = useState("");
  const [cmValid, setCmValid] = useState(false);
  const [inchValid, setInchValid] = useState(false);
  const [footValid, setFootValid] = useState(false);
  console.log("cmValid " + cmValid);
  console.log("inchValid " + inchValid);
  console.log("footValid " + footValid);
  console.log("foot length " + foot.length);
  console.log("inch length " + inch.length);

  useEffect(() => {
    if (isCm) {
      setInchValid(false);
      setInch("");
      setFootValid(false);
      setFoot("");
    } else {
      setCmValid(false);
      setCm("");
    }
  }, [isCm]);

  const handleCm = (e) => {
    setCm((cm) => (cm = e.target.value));
    if (isCm) {
      if (inputRef.current.value < 40 || inputRef.current.value > 240) {
        setCmValid(false);
      } else {
        setCmValid(true);
      }
    }
  };
  const handleInch = (e) => {
    setInch((inch) => (inch = e.target.value));
    if (
      inchRef.current.value < 0 ||
      inchRef.current.value > 12 ||
      inchRef.current.value.length < 1
    ) {
      setInchValid(false);
    } else {
      setInchValid(true);
    }
  };
  const handleFoot = (e) => {
    setFoot((foot) => (foot = e.target.value));
    if (
      footRef.current.value < 0 ||
      footRef.current.value > 7 ||
      footRef.current.value.length < 1
    ) {
      setFootValid(false);
    } else {
      setFootValid(true);
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
            <QuestionLayOut questionText={"What's your height?"} />

            <ToggleButton
              optionOne={"cm"}
              optionTwo={"ft"}
              setToggleBoolean={setIsCm}
              toggleBoolean={isCm}
            />
            {isCm ? (
              <div
                className={`text-lg my-7 text-mehranaYellow ${
                  cmValid || cm == "" ? "opacity-0" : "opacity-100"
                } transition-all text-center my-2`}
              >
                Enter a valid height cm
              </div>
            ) : (
              <div
                className={`text-lg my-7 text-mehranaYellow ${
                  (footValid && inchValid) || foot == "" || inch == ""
                    ? "opacity-0"
                    : "opacity-100"
                } transition-all text-center my-2`}
              >
                Enter a valid height ft
              </div>
            )}

            {isCm ? (
              <InputNumber
                placeholder="cm"
                handleNumber={handleCm}
                number={cm}
                inputRef={inputRef}
              />
            ) : (
              <>
                <div className="flex flex-row justify-center">
                  <InputNumber
                    placeholder={"ft"}
                    handleNumber={handleFoot}
                    number={foot}
                    inputRef={footRef}
                  />
                  <InputNumber
                    placeholder={"in"}
                    handleNumber={handleInch}
                    number={inch}
                    inputRef={inchRef}
                  />
                </div>
              </>
            )}
          </div>
          <NextStep
            valid={isCm ? cmValid : inchValid && footValid}
            toWhere={"/profile/yourWeight"}
          />
          <BottomProgressBars profileValue={7} />
        </div>
      </form>
    </>
  );
};
export default YourHeight;
