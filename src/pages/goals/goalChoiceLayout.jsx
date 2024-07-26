const GoalChoiceLayout = ({ img, goal }) => {
  return (
    <>
      <div className="relative my-7">
        <div
          className="absolute flex h-full items-center"
          style={{ left: "-30px" }}
        >
          <img src={img} alt="choice-img" className="h-5/6" />
        </div>
        <div
          className="w-full grid grid-cols-3 text-center text-2xl py-8 rounded-xl hover:border-2 border-black duration-75 transition-all "
          style={{
            background:
              "linear-gradient(90deg, rgba(255,125,0,1) 0%, rgba(255,255,255,1) 100%)",
          }}
        >
          {goal}
        </div>
      </div>
    </>
  );
};

export default GoalChoiceLayout;
