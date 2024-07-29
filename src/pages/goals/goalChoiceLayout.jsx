const GoalChoiceLayout = ({ img, goal, thin }) => {
  return (
    <>
      <div className={`relative ${thin ? "my-3" : "my-7"}`}>
        <div
          className="absolute flex h-full items-center"
          style={{ left: "-30px" }}
        >
          {img ? <img src={img} alt="choice-img" className="h-5/6" /> : null}
        </div>
        <div
          className={`w-full ps-16 ${
            thin ? "py-3" : "py-8"
          } rounded-xl border-transparent text-2xl border-2 hover:border-black hover:border-e-2 border-e-0 duration-75 transition-all`}
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
