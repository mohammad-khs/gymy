import { Link } from "react-router-dom";

const NextStep = ({ toWhere, valid }) => {
  if (valid === undefined) {
    valid = true;
  }
  return (
    <>
      <button
        type="submit"
        className="z-10 m-8 text-white bg-mehranaDarkGray text-2xl rounded-xl hover:bg-mehranaOrange transition-colors"
      >
        {valid ? (
          <Link className="block py-2 px-8" to={toWhere}>
            Next step
          </Link>
        ) : (
          <div className=" py-2 px-8">Next step</div>
        )}
      </button>
    </>
  );
};

export default NextStep;
