import DiagnalFog from "../common_components/diagnalFog";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";
import RangeInput from "../common_components/rangeInput";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const MealsADay = () => {
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <div className="w-2/5">
          <QuestionLayOut questionText={"How many meals a day you have?"} />
          <RangeInput max={6} text={"meals a day"} />
        </div>
        <NextStep toWhere={"/profile/habits"} />
        <BottomProgressBars profileValue={3} />
      </div>
    </>
  );
};

export default MealsADay;
