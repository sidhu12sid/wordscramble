import React from "react";
import Header from "../header-component/Header";
import { useNavigate } from "react-router-dom";

const Result = ({ status, score, finalAnswer, resetGame }) => {
  const navigate = useNavigate();

  const handleButtonClicks = (type) => {
    debugger;
    if (type == 1) {
      resetGame();
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="absolute flex justify-center items-center inset-0 bg-opacity-20 backdrop-blur-sm transition delay-200 duration-600 ease-in-out px-4">
        <div className="shadow-2xl p-4 sm:p-10 rounded-xl bg-white backdrop-blur-sm animate-fade-in w-full max-w-md">
          <div className="text-center space-y-2">
            <h1 className="font-bold text-2xl sm:text-3xl text-gray-800 ">
              {status === 0 ? "Wrong answer, try again!": "Oops! Time is out."}
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Correct Answer : {finalAnswer}
            </p>
            <p className="text-sm sm:text-base text-gray-500">
              Your Score is : {score}
            </p>
          </div>

          <div className="p-2 sm:p-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
            <button
              type="button"
              className="w-full sm:w-auto bg-[#00a3ff] px-4 py-2 sm:px-4 sm:py-2 text-white text-base sm:text-lg font-medium rounded-md hover:bg-[#0088dd] shadow-lg flex items-center justify-center"
              onClick={() => handleButtonClicks(1)}
            >
              Try Again 🔄
            </button>
            <button
              type="button"
              className="w-full sm:w-auto bg-[#00a3ff] px-4 py-2 sm:px-4 sm:py-2 text-white text-base sm:text-lg font-medium rounded-md hover:bg-[#0088dd] shadow-lg flex items-center justify-center"
              onClick={() => handleButtonClicks(2)}
            >
              Home 🏠
            </button>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
