import React from "react";
import Header from "../header-component/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const showGameComponent = () => {
    navigate("/game", {state: {isStarted : true}});
  };

  return (
    <>
      <Header />
      <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="bg-white max-w-md md:max-w-2xl mx-auto rounded-3xl shadow-2xl text-center flex flex-col items-center justify-center p-10 h-full sm:h-auto">
          <div className="p-15">
              <h1 className="text-4xl font-extrabold text-gray-800 pb-5 drop-shadow-sm">
                Welcome to the Game
              </h1>
              <p>
                Unscramble the letters to test your brainpower. Are you ready to
                play?
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={showGameComponent}
                className="px-8 py-3 bg-indigo-600 text-white text-xl font-medium rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg"
              >
              🚀 Start Game 🚀 
              </button>
            </div>
          </div>
      </div>
    </>
  );
};
export default Home;
