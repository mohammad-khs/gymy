import { useState } from "react";
import Login from "./Login";
import SignUp from "./signUp";

const Auth = () => {
  let [isLogin, setIsLogin] = useState(false);

  return (
    <>
      
      <div className="h-screen">
        <div className="h-screen flex justify-center items-center">
          <div className=" w-2/5 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-2">
              <button
              type="button"
                onClick={(e) => setIsLogin(false)}
                className={`shadow-lg text-2xl rounded-t-2xl py-2 text-center text-white ${
                  isLogin ? "bg-mehranaOrange bg-opacity-50" : "bg-mehranaDarkGray bg-opacity-50"
                }`}
              >
                sign up
              </button>
              <button
              type="button"
                onClick={(e) => setIsLogin(true)}
                className={`shadow-lg text-2xl rounded-t-2xl py-2 text-center text-white ${
                  isLogin ? "bg-mehranaDarkGray bg-opacity-50" : "bg-mehranaOrange bg-opacity-50"
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
