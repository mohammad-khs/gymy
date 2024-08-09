const VerticalFog = () => {
  return (
    <>
      <div className=" absolute w-full h-full bg-transparent left-0 top-0">
        <div className=" flex flex-col w-full h-full justify-center items-center">
          <div
            className="flex flex-col w-1/5 h-screen justify-center items-center bg-white"
            style={{
              WebkitBoxShadow: "0px 0px 100px 100px #ffffff",
              MozBoxShadow: "0px 0px 100px 100px #ffffff",
              boxShadow: "0px 0px 100px 100px #ffffff",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default VerticalFog;
