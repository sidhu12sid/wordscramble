import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Game from "../game-component/Game";
import Header from "../header-component/Header";

const Home = () => {
  const [gameComponent, setGameComponent] = useState(false);
  
  const showGameComponent = () => {
    setGameComponent(true);
  };

  return (
    <>
      <div>
        <Header />
        {!gameComponent && (
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="border border-indigo-600 w-1/2 h-1/2">
              <div className="p-5 ">
                <h1 className="text-2xl">Hello this could be the heading</h1>
                <p className="mt-10">Hai this is the paragraph which is the thing</p>
              </div>
              <div className="flex items-center justify-center h-full">
                <button type="button" onClick={showGameComponent}>Click Here</button>
              </div>
            </div>
          </div>
        )}
        {gameComponent && <Game isStarted={gameComponent} />}
      </div>
    </>
  );
};
export default Home;
