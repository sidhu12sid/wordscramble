import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Game from '../game-component/Game';

const Home = () => {

 const [gameComponent, setGameComponent] = useState(false);
 const showGameComponent = () => {
  setGameComponent(true);
 }

  return (
    <>  
    {!gameComponent && ( <div>
        <button type="button" onClick={showGameComponent}>START GAME</button>
     </div>)}

      {gameComponent && <Game
        isStarted = {gameComponent}
      />}
    </>
  )
}
export default Home
