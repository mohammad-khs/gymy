const ChoiceInputLO = ({ ChoiceText, index }) => {
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-2xl rounded-xl my-3 border-transparent border-2 hover:border-black hover:border-e-2 border-e-0 duration-75 transition-all"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,125,0,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <label className="ms-5 block relative py-4 rounded-xl">
          {ChoiceText}
          <div className="absolute z-10 w-full h-full flex items-center top-0 right-6 justify-end">
            <input
              type="checkbox"
              className="peer appearance-none w-6 h-6 rounded-full border-2 border-mehranaOrange cursor-pointer checked:bg-mehranaDarkGray"
              id={index}
            />
          </div>
        </label>
      </form>
    </>
  );
};

export default ChoiceInputLO;
