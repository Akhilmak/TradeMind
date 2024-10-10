import React from "react";
import "./Auth.css";
import SignUp from "./SignUp";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import Signin from "./Signin";
const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 ">
        <div
          className="bgBlur absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            flex items-center justify-center flex-col h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50  shadow-lg border shadow-blue-400 "
        >
          
          <div className=" absolute top-10 flex justify-between  ">
            <span><h1 className="text-6xl font-bold pb-9 text-orange-600">Trade</h1>
          </span>
          <span>
            <h1 className="text-6xl font-bold pb-9 text-white">Mind</h1>
          </span>
          </div>
          
          
          {location.pathname === "/signup" ? (
            <section className="w-full">
              <SignUp />
              <div className="flex items-center justify-center">
                <span>Have an account?</span>
                <Button onClick={() => navigate("/signin")} variant="link" className='text-gray-400'>
                  Sign In
                </Button>
              </div>
            </section>
          ) : location.pathname === "/forgot-password" ? (
            <section className="w-full">
              <ForgotPasswordForm />
              <div className="flex items-center justify-center">
                <span>Back to Login</span>
                <Button className='text-gray-400' variant="link" onClick={() => navigate("/signin") } >
                  Log In
                </Button>
              </div>
            </section>
          ) : (
            <section className="w-full">
              <Signin />
              <div className="flex items-center justify-center">
                <span>Dont Have account?</span>
                <Button onClick={() => navigate("/signup")} variant="link" className='text-gray-400'>
                  Sign Up
                </Button>
                </div>
                <div className="flex items-center justify-center">
                  
                  <Button
                    onClick={() => navigate("/forgot-password")}
                    variant="link" 
                    className='text-gray-400'
                  >
                    Forgot Password ?
                  </Button>
                </div>
              
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
