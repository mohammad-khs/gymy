const BottomProgressBar = ({ max, finished, value, unavailable }) => {
  return (
    <>
      <input
        className={`[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-mehranaYellow [&::-webkit-slider-thumb]:w-8 ${
          unavailable
            ? "[&::-webkit-slider-thumb]:hidden"
            : "[&::-webkit-slider-thumb]:h-[6px]"
        }  ${
          unavailable ? "" : "[&::-webkit-slider-thumb]:outline"
        } [&::-webkit-slider-thumb]:outline-1 relative my-10 [&::-webkit-slider-thumb]:rounded-full h-2 w-full rounded-lg appearance-none ${
          finished ? "bg-mehranaYellow bg-opacity-50" : "bg-mehranaGray"
        }`}
        type="range"
        disabled={unavailable || false}
        defaultValue={value}
        readOnly
        max={max}
        min={1}
        name="input-range"
        id="gymy-range"
      />
    </>
  );
};

export default BottomProgressBar;
