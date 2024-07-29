const VerticalFog = () => {
  return (
    <>
      <div className="absolute h-screen w-full flex justify-center">
        <div
          className="h-full"
          style={{
            zIndex: -1,
            webkitBoxShadow: "0px 0px 200px 25vw #ffffff",
            mozBoxShadow: "0px 0px 200px 25vw #ffffff",
            boxShadow: "0px 0px 200px 25vw #ffffff",
          }}
        ></div>
      </div>
    </>
  );
};

export default VerticalFog;
