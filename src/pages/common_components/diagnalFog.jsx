const DiagnalFog = () => {
  return (
    <>
      <div className="absolute h-screen w-full flex justify-center">
        <div
          className="h-full"
          style={{
            zIndex: -1,
            WebKitboxShadow: "0px 0px 200px 35vw #ffffff",
            MozBoxShadow: "0px 0px 200px 35vw #ffffff",
            boxShadow: "0px 0px 200px 35vw #ffffff",
            transform: "skew(-45deg)",
          }}
        ></div>
      </div>
    </>
  );
};

export default DiagnalFog;
