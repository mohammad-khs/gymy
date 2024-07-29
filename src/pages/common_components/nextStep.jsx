import { Link } from "react-router-dom";

const NextStep = ({ toWhere }) => {
  return (
    <>
      <Link to={toWhere} className="z-10 m-8">
        <button className="text-white bg-mehranaDarkGray text-2xl py-2 px-8 rounded-xl hover:bg-mehranaOrange transition-colors">
          Next step
        </button>
      </Link>
    </>
  );
};

export default NextStep;