import { useRef, useState } from "react";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";
import DiagnalFog from "../common_components/diagnalFog";
import InputNumber from "../common_components/inputNumber";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";

const YourAge = () => {
  const inputRef = useRef(null);
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState(false);
  const handleNumber = (e) => {
    setNumber((number) => (number = e.target.value));
    if (inputRef.current.value < 5 || inputRef.current.value > 100) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value < 5 || inputRef.current.value > 100) {
      setNumber("");
    }
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <DiagnalFog />
        <div className="h-screen flex-col flex justify-center align-middle items-center">
          <div className="w-2/5">
            <QuestionLayOut
              questionText={"What's your age?"}
              questionFootNote={
                "Your age helps us create the best  personalized plan that refelects your unique needs and goals"
              }
            />

            <div
              className={`text-lg text-mehranaYellow ${valid || number == "" ? "opacity-0" : "opacity-100"} transition-all text-center my-2`}
            >
              Enter a valid age
            </div>

            <InputNumber
            placeholder={"years"}
              handleNumber={handleNumber}
              number={number}
              inputRef={inputRef}
            />
          </div>
          <NextStep valid={valid} toWhere={"/profile/yourHeight"} />
          <BottomProgressBars profileValue={6} />
        </div>
      </form>
    </>
  );
};

export default YourAge;
