const TopBottomFog = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-between z-0">
        <div
          className="bg-white h-1/5 w-full"
          style={{
            boxShadow: "1px 100px 100px #ffffff",
            MozBoxShadow: "1px 100px 100px #ffffff",
            WebkitBoxShadow: "1px 100px 100px #ffffff",
          }}
        ></div>
        <div
          className="bg-white h-1/5 w-full"
          style={{
            boxShadow: "1px -100px 100px #ffffff",
            MozBoxShadow: "1px -100px 100px #ffffff",
            WebkitBoxShadow: "1px -100px 100px #ffffff",
          }}
        ></div>
      </div>
    </>
  );
};

export default TopBottomFog;
