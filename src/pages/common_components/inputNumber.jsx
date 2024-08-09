import { useState } from "react";

const InputNumber = ({ inputRef, handleNumber, number , placeholder }) => {
  return (
    <>
      <div className="flex justify-center">
        <input
          ref={inputRef}
          className="z-50 bg-transparent border-b-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
          [&::-webkit-inner-spin-button]:appearance-none border-mehranaDarkBlue justify-center relative text-center
          outline-none text-2xl p-2 text-mehranaOrange placeholder:text-mehranaOrange placeholder:text-opacity-60"
          placeholder={placeholder}
          value={number}
          onChange={(e) => handleNumber(e)}
          autoFocus
          type="number"
        />
      </div>
    </>
  );
};

export default InputNumber;
