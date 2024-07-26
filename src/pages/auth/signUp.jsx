import { Link } from "react-router-dom";

const SignUp = () => {

  return (
    <>
      <div className="bg-mehranaDarkBlue bg-opacity-50 rounded-b-2xl">
        <form className="py-7" action="submit">
          <h1 className="text-mehranaOrange text-center text-5xl p-4 font-bold  tracking-wider">
            sign up
          </h1>
          <div className="flex flex-col justify-center items-center">
            <input
              className="my-5 w-80 h-12 rounded-t-3xl py-3 text-xl px-4"
              type="text"
              name="user-name"
              placeholder="Username"
            />
            <input
              className="my-5 w-80 h-12 py-3 text-xl px-4"
              type="email"
              name="user-email"
              placeholder="E-mail"
            />
            <input
              className="my-5 w-80 h-12 rounded-b-3xl py-3 text-xl px-4"
              type="password"
              name="user-password"
              placeholder="Password"
            />
            <div className="w-80 mt-2">
              <input type="checkbox" id="remind-me" name="remind-me" />
              <label htmlFor="remind-me" className="text-white text-xl">
                {" "}
                Remind me
              </label>
            </div>
            <Link to={"genderSelection"}>
              <button
                type="button"
                className="tracking-wider rounded-2xl px-16 py-2 border-2 my-16 text-2xl hover:bg-mehranaDarkGray transition-colors text-white bg-opacity-50 border-mehranaOrange"
              >
                sign up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
