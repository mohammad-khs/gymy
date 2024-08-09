const ToggleButton = ({optionOne,optionTwo,toggleBoolean,setToggleBoolean}) => {
  return (
    <>
      <label className="flex flex-col row-span-3 justify-center items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          onClick={(e) => setToggleBoolean((toggleBoolean) => (toggleBoolean = !toggleBoolean))}
          value={toggleBoolean}
          className="sr-only peer"
        />
        <div className="relative w-32 h-10 select-none rounded-full peer bg-mehranaDarkGray peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[0px] after:start-[0px] after:bg-mehranaOrange after:peer-checked:bg-mehranaOrange after:rounded-full after:h-10 after:w-16 after:transition-all">
          <div className="relative z-50 w-full h-full text-2xl text-white">
            <div className="absolute left-4 top-0">{optionOne}</div>
            <div className="absolute right-6 top-[2px]">{optionTwo}</div>
          </div>
        </div>
      </label>
    </>
  );
};

export default ToggleButton;
