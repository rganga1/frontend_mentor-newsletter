import React from "react";
import { useNavigate } from "react-router";
import iconSuccess from "/images/icon-success.svg"

function Success() {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center
    items-center min-h-screen bg-[#36384D]">
      <div className="flex flex-col gap-6 w-full sm:w-[480px] h-full sm:h-auto sm:rounded-xl bg-white p-2 sm:p-12">
        {/* <img src="/images/icon-success.svg" this is not working in the build with basename */}
        <img src={iconSuccess}
          alt="success"
          className="w-[3.5rem] h-[3.5rem]"
        />
        <h1 className="text-5xl font-roboto_bold">Thanks for subscribing!</h1>
        <h5 className="font-roboto_regular">
          A confirmation email has been sent to ash@loremcompany.com. Please
          open it and click the button inside to confirm your subscription
        </h5>
        <button
          onClick={() => navigate("/")}
          className="mt-auto sm:mt-0 p-3 rounded-lg bg-black hover:bg-gradient-to-r hover:from-[#FF5379] hover:to-[#FF693E] text-white">
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default Success;

//Thanks for subscribing! A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription. Dismiss message
// Challenge by Frontend Mentor. Coded by Your Name Here.
