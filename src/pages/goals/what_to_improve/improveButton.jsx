import { useState } from "react";

const ImproveButton = ({ name }) => {
  const [colored, setColored] = useState(false);

  return (
    <>
      <button
        onClick={(e) => setColored((colored) => (colored = !colored))}
        className={`z-10 racking-wider rounded-full py-3 border-2 mx-8 my-3 text-lg bg-${
          colored ? "mehranaOrange" : "mehranaDarkBlue"
        } hover:bg-mehranaOrange hover:bg-opacity-50 transition-colors text-${
          colored ? "mehranaDarkBlue" : "mehranaOrange"
        } hover:text-mehranaDarkBlue bg-opacity-50 border-mehranaOrange`}
      >
        {name}
      </button>
    </>
  );
};

export default ImproveButton;
