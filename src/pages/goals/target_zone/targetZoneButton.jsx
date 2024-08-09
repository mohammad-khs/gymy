import { useEffect, useState } from "react";

const TargetZoneButton = ({ name, allBody }) => {
  const [colored, setColored] = useState(false);
  useEffect(() => {
    if (allBody === true) {
      setColored(true);
    } else {
      setColored((color) => (color = false));
    }
  }, [allBody]);
  return (
    <>
      <button
        onClick={(e) => setColored((color) => (color = !color))}
        className={`hover:bg-mehranaOrange py-1 px-5 text-center text-2xl rounded-2xl ${
          colored === true ? "bg-mehranaOrange" : "bg-white"
        } border-mehranaOrange border-2 transition-colors`}
      >
        {name}
      </button>
    </>
  );
};

export default TargetZoneButton;
