import DiagnalFog from "../common_components/diagnalFog";
import NextStep from "../common_components/nextStep";
import QuestionLayOut from "../common_components/questionLayOut";
import RangeInput from "../common_components/rangeInput";
import BottomProgressBars from "../common_components/bottom_progress_bars/bottomProgressBars";

const PeriodDuration = () => {
  return (
    <>
      <DiagnalFog />
      <div className="h-screen flex-col flex justify-center align-middle items-center">
        <QuestionLayOut
          questionText={"How long does your period usually last?"}
          questionFootNote={
            "your menstrual cycle begins on the first day of bleeding"
          }
        />
        <div className="w-2/5">
          <RangeInput max={10} text={"days"} />
        </div>
        <NextStep toWhere={"/healthCycle/menstrualCycleDuration"} />
        <BottomProgressBars healthValue={2} />
      </div>
    </>
  );
};
export default PeriodDuration;
