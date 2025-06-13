import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Timer from "../timer-component/Timer";
import Header from "../header-component/Header";
import Result from "../result-component/Result";

const Game = () => {
  const location = useLocation();
  const words = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elephant",
    "flower",
    "grape",
    "house",
    "island",
    "jungle",
    "kite",
    "lion",
    "mountain",
    "notebook",
    "ocean",
    "pencil",
    "queen",
    "river",
    "sun",
    "tree",
    "umbrella",
    "violet",
    "window",
    "xylophone",
    "yacht",
    "zebra",
    "airplane",
    "bridge",
    "castle",
    "diamond",
    "engine",
    "forest",
    "garden",
    "harbor",
    "iceberg",
    "jacket",
    "keyboard",
    "lamp",
    "mirror",
    "needle",
    "orange",
    "puzzle",
    "quilt",
    "rocket",
    "ship",
    "train",
    "unicorn",
    "violin",
    "whale",
    "x-ray",
    "yogurt",
    "package",
    "arch",
    "boat",
    "cloud",
    "drum",
    "earth",
    "fire",
    "globe",
    "hill",
    "ink",
    "jewel",
    "king",
    "leaf",
    "moon",
    "nest",
    "owl",
    "pen",
    "queen",
    "rain",
    "star",
    "table",
    "urn",
    "vase",
    "wolf",
    "xenon",
    "yard",
    "zip",
    "ant",
    "ball",
    "cat",
    "dog",
    "egg",
    "fish",
    "goat",
    "hat",
    "ice",
    "jar",
    "kid",
    "log",
    "mat",
    "net",
    "oak",
    "pig",
    "quail",
    "rat",
    "sun",
    "tan",
    "urn",
    "van",
    "acorn",
    "beach",
    "cactus",
    "dolphin",
    "eagle",
    "feather",
    "garden",
    "harvest",
    "iceberg",
    "jungle",
    "kayak",
    "ladder",
    "marsh",
    "nectar",
    "orchid",
    "pebble",
    "quiver",
    "ripple",
    "saddle",
    "tundra",
    "urchin",
    "valley",
    "willow",
    "xenon",
    "arrow",
    "zephyr",
    "albatross",
    "blossom",
    "canyon",
    "drizzle",
    "ember",
    "fjord",
    "glacier",
    "hammock",
    "island",
    "jigsaw",
    "kiln",
    "lagoon",
    "meadow",
    "nugget",
    "oasis",
    "pinnacle",
    "quartz",
    "reef",
    "sprout",
    "timber",
    "upland",
    "vista",
    "wombat",
    "xerox",
    "model",
    "update",
    "amber",
    "breeze",
    "cliff",
    "dune",
    "echo",
    "fern",
    "grove",
    "horizon",
    "iris",
    "jungle",
    "knoll",
    "ledge",
    "moss",
    "niche",
    "opal",
    "pine",
    "quail",
    "ridge",
    "sage",
    "thicket",
    "undulate",
    "vortex",
    "whisper",
    "xylem",
    "yew",
    "zodiac",
    "archer",
    "boulder",
    "crag",
    "drift",
    "echo",
    "fjord",
    "glen",
    "hearth",
    "inlet",
    "jetty",
    "knoll",
    "ledge",
    "moraine",
    "nimbus",
    "outcrop",
    "plateau",
    "winner",
    "rain",
    "shoal",
    "torrent",
    "uplift",
    "valley",
  ];

const initialGameState = {
  scrambledWord: "",
  isCorrect: false,
  userScore: 0,
  word: "",
  userInput: "",
  resetTimerKey: 0,
  isStarted: false,
  isTimeout : false,
  hasSubmitted : false,
  status:''
}

  const [gameState, setGameState] = useState({
    scrambledWord: "",
    isCorrect: false,
    userScore: 0,
    word: "",
    userInput: "",
    resetTimerKey: 0,
    isStarted: location.state?.isStarted || false,
    isTimeout : false,
    hasSubmitted : false,
    status:''
  });

  const resetGame = () => {
    
    const resetTime = gameState.resetTimerKey + 1;
    setGameState({
      ...initialGameState,
      isStarted :true,
      resetTimerKey: resetTime
    })
    getNewWord();
  }

  useEffect(() => {
    if (gameState.isStarted) {
      getNewWord();
    }
  }, [gameState.isStarted]);

  useEffect(() => {
    
    if (gameState.isCorrect) {
      getNewWord();

      setGameState((prevState) => ({
        ...prevState,
        isCorrect: false,
        hasSubmitted:false
      }));
    }
  }, [gameState.isCorrect]);

  const getNewWord = () => {
    const randomIndex = Math.floor(Math.random() * 200);
    const word = words[randomIndex];
    const scrambledWord = scrambleWord(word);
    ;
    setGameState((prevState) => ({
      ...prevState,
      word: word,
      scrambledWord: scrambledWord
    }));
    console.log(word);
  };

  const scrambleWord = (word) => {
    const chars = word.split("");
    let scrambled = word;
    while (scrambled === word) {
      scrambled = chars.sort(() => Math.random() - 0.5).join("");
    }
    return scrambled;
  };

  const checkInput = (input) => {
    debugger;
    if (input && input.toLowerCase() === gameState.word.toLowerCase()) {
      setGameState((prevState) => ({
        ...prevState,
        isCorrect: true,
        userScore: prevState.userScore + 1,
        resetTimerKey: prevState.resetTimerKey + 1,
        hasSubmitted:true,
        userInput: "",
      }));
    } else {
      setGameState((prevState) => ({
        ...prevState,
        isCorrect: false,
        hasSubmitted:true,
        status:0
      }));
    }
  };

  const handleTimeUp = () => { 
    debugger
    setGameState((prevState) => ({
      ...prevState,
      isTimeout: true,
      hasSubmitted:true,
      status:1
    }));
    console.log(gameState.status)
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    checkInput(gameState.userInput); 
  };

  return (
    <>
      <Header />
      {gameState.hasSubmitted && (gameState.isTimeout || !gameState.isCorrect) && (
        <Result 
        status = {gameState.status} 
        score = {gameState.userScore}
        finalAnswer={gameState.word}
        resetGame={resetGame}
        />
          )}
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <div className="bg-white shadow-2xl w-auto h-auto p-10">
          <div className="pb-1 sm:w-auto md:w-lg flex flex-row justify-between">
            <Timer
              seconds={2}
              onComplete={handleTimeUp}
              reset={gameState.resetTimerKey}
              status={gameState.status}
            />
            <p className="text-lg font-bold">Score : {gameState.userScore} </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white p-6 max-w-md mx-auto mt-8"
            >
              <input
                type="text"
                value={gameState.userInput}
                onChange={(e) =>
                  setGameState((prevState) => ({
                    ...prevState,
                    userInput: e.target.value,
                  }))
                }
                placeholder="Enter your answer"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>    
          </div>
          <div className="">
            <p className="text-xl">Scrambled Word : <span  className="font-bold text-xl">{gameState.scrambledWord}</span></p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Game;
