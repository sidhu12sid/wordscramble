import React from "react";
import Header from "../header-component/Header";

const Result = ({ message,}) => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-transparent px-4">
        <div className="shadow-2xl p-6 sm:p-10 rounded-xl bg-white backdrop-blur-sm animate-fade-in w-full max-w-md">
          <div className="text-center space-y-2">
            <h1 className="font-bold text-2xl sm:text-3xl text-gray-800">
              Oops! Something went wrong
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              We couldn't process your request.
            </p>
          </div>

          {/* Responsive buttons - stack vertically on small screens */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
            <button
              type="button"
              className="w-full sm:w-auto bg-[#00a3ff] px-4 py-2 sm:px-4 sm:py-2 text-white text-base sm:text-lg font-medium rounded-md hover:bg-[#0088dd] transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              Try Again 🔄
            </button>
            <button
              type="button"
              className="w-full sm:w-auto bg-[#00a3ff] px-4 py-2 sm:px-4 sm:py-2 text-white text-base sm:text-lg font-medium rounded-md hover:bg-[#0088dd] transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
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
