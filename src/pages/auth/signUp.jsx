const SignUp = () => {
  return (
    <>
      <div className="bg-slate-800 bg-opacity-50 rounded-b-2xl">
        <form className="py-7" action="submit">
          <h1 className="text-orange-400 text-center text-5xl p-4 font-bold  tracking-wider">
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
              <input type="checkbox" name="remind-me" />
              <label for="remind-me" className="text-white text-xl">
                {" "}
                Remind me
              </label>
            </div>
            <button
              type="button"
              className="tracking-wider rounded-2xl px-16 py-2 border-2 my-16 text-2xl hover:bg-slate-500 transition-colors text-white bg-opacity-50 border-orange-400"
            >
              sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
