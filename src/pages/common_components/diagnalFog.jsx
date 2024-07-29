const DiagnalFog = () => {
  return (
    <>
      <div className="absolute h-screen w-full flex justify-center">
        <div
          className="h-full"
          style={{
            zIndex: -1,
            boxShadow: "0px 0px 200px 40vw #ffffff",
            transform: "skew(-45deg)"
          }}
        ></div>
      </div>
    </>
  );
};

export default DiagnalFog;
