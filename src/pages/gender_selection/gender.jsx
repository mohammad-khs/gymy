import { Link } from "react-router-dom";

const Gender = ({ imgPath, gender }) => {
  return (
    <>
      <Link to={"/goals"} >
        <div className="relative">
          <img
            src={imgPath}
            alt="gender-img"
            width={200}
            className="absolute z-0"
            style={{ top: "-160px", left: "11%" }}
          />
          <div>
            <svg
              style={{ width: 0, height: 0, position: "absolute" }}
              aria-hidden="true"
              focusable="false"
            >
              <linearGradient id="my-cool-gradient" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff7d00" />
                <stop offset="100%" stopColor="#ffe0c3" />
              </linearGradient>
            </svg>
            <svg width="250px" height="250px" viewBox="0 0 24 24">
              <path
                d="M13.7889 1.57769L23.5528 21.1056C24.0468 22.0935 23.6463 23.2949 22.6584 23.7888C22.3806 23.9277 22.0744 24 21.7639 24H2.23607C1.1315 24 0.236069 23.1046 0.236069 22C0.236069 21.6895 0.308359 21.3833 0.447214 21.1056L10.2111 1.57769C10.7051 0.589734 11.9065 0.189285 12.8944 0.683263C13.2815 0.876791 13.5953 1.19064 13.7889 1.57769Z"
                fill="url(#my-cool-gradient) #ff7d00"
              />
            </svg>
          </div>
          <div className="w-full flex justify-center align-middle">
            <div className="absolute bottom-9 text-2xl">{gender}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Gender;
