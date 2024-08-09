import { useState } from "react";

const RangeInput = ({ max, text }) => {
  const [meal, setMeal] = useState(1);
  const handleMeal = (e) => {
    setMeal((meal) => (meal = e.target.value));
  };
  return (
    <>
      <label
        htmlFor="gymy-range"
        className="text-center block text-mehranaOrange text-3xl"
      >
        {meal} {text}
      </label>
      <input
        className="z-50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-mehranaDarkGray [&::-webkit-slider-thumb]:w-8
        [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full h-3 w-full cursor-pointer rounded-lg appearance-none 
        bg-gradient-to-r from-[rgba(255,125,0,1)] to-[rgba(255,248,236,1)] relative my-10"
        type="range"
        onChange={(e) => handleMeal(e)}
        value={meal}
        max={max}
        min={1}
        name="input-range"
        id="gymy-range"
      />
    </>
  );
};

export default RangeInput;
