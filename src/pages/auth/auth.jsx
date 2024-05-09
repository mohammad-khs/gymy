import { useState } from "react";
import Login from "./Login";
import SignUp from "./signUp";
import CustomParticles from "../customParticles";
const Auth = () => {
  let [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <CustomParticles />
      <div className="h-screen">
        <div className="h-screen flex justify-center items-center">
          <div className=" w-2/5 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-2">
              <button
              type="button"
                onClick={(e) => setIsLogin(false)}
                className={`shadow-lg text-2xl rounded-t-2xl py-2 text-center text-white ${
                  isLogin ? "bg-orange-400 bg-opacity-50" : "bg-slate-800 bg-opacity-50"
                }`}
              >
                sign up
              </button>
              <button
              type="button"
                onClick={(e) => setIsLogin(true)}
                className={`shadow-lg text-2xl rounded-t-2xl py-2 text-center text-white ${
                  isLogin ? "bg-slate-800 bg-opacity-50" : "bg-orange-500 bg-opacity-50"
                }`}
              >
                sign in
              </button>
            </div>
            {isLogin ? <Login /> : <SignUp />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
