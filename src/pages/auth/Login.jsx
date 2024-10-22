import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-mehranaDarkBlue bg-opacity-50 rounded-b-2xl">
      <form onSubmit={(e) => e.preventDefault()} className="py-7">
        <h1 className="text-mehranaOrange text-center text-5xl p-4 font-bold tracking-wider">
          sign in
        </h1>
        <div className="flex flex-col justify-center items-center">
          <input
            className="my-5 w-80 h-12 rounded-t-3xl py-3 text-xl px-4"
            type="email"
            name="user-email"
            placeholder="E-mail"
            autoComplete="email"
          />
          <input
            className="my-5 w-80 h-12 rounded-b-3xl py-3 text-xl px-4"
            type="password"
            name="user-password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <Link className="my-16" to={"genderSelection"}>
            <button
              type="submit"
              className="tracking-wider rounded-2xl px-16 py-2 border-2 text-2xl hover:bg-mehranaDarkGray transition-colors text-white bg-opacity-50 border-mehranaOrange"
            >
              sign in
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
