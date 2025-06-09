import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../timer-component/Timer";

const Game = ({ isStarted }) => {
  const words = [
    "apple", "banana", "cherry", "date", "elephant", "flower", "grape", "house", "island", "jungle",
    "kite", "lion", "mountain", "notebook", "ocean", "pencil", "queen", "river", "sun", "tree",
    "umbrella", "violet", "window", "xylophone", "yacht", "zebra", "airplane", "bridge", "castle", "diamond",
    "engine", "forest", "garden", "harbor", "iceberg", "jacket", "keyboard", "lamp", "mirror", "needle",
    "orange", "puzzle", "quilt", "rocket", "ship", "train", "unicorn", "violin", "whale", "x-ray",
    "yogurt", "package", "arch", "boat", "cloud", "drum", "earth", "fire", "globe", "hill",
    "ink", "jewel", "king", "leaf", "moon", "nest", "owl", "pen", "queen", "rain",
    "star", "table", "urn", "vase", "wolf", "xenon", "yard", "zip", "ant", "ball",
    "cat", "dog", "egg", "fish", "goat", "hat", "ice", "jar", "kid", "log",
    "mat", "net", "oak", "pig", "quail", "rat", "sun", "tan", "urn", "van",  "acorn", "beach", "cactus", "dolphin", "eagle", "feather", "garden", "harvest", "iceberg", "jungle",
    "kayak", "ladder", "marsh", "nectar", "orchid", "pebble", "quiver", "ripple", "saddle", "tundra",
    "urchin", "valley", "willow", "xenon", "arrow", "zephyr", "albatross", "blossom", "canyon", "drizzle",
    "ember", "fjord", "glacier", "hammock", "island", "jigsaw", "kiln", "lagoon", "meadow", "nugget",
    "oasis", "pinnacle", "quartz", "reef", "sprout", "timber", "upland", "vista", "wombat", "xerox",
    "model", "update", "amber", "breeze", "cliff", "dune", "echo", "fern", "grove", "horizon",
    "iris", "jungle", "knoll", "ledge", "moss", "niche", "opal", "pine", "quail", "ridge",
    "sage", "thicket", "undulate", "vortex", "whisper", "xylem", "yew", "zodiac", "archer", "boulder",
    "crag", "drift", "echo", "fjord", "glen", "hearth", "inlet", "jetty", "knoll", "ledge",
    "moraine", "nimbus", "outcrop", "plateau", "winner", "rain", "shoal", "torrent", "uplift", "valley"  
  ];

  const navigate = useNavigate();
  const [gameState, setGameState] = useState({
    scrambledWord : "",
    isCorrect :false,
    userScore :0,
    word : "",
    userInput: "",
    resetTimerKey : 0,
    isStarted:isStarted
  });

useEffect(() => {
  debugger
if(gameState.isStarted) {
  getNewWord();
}}, [gameState.isStarted]);

useEffect(() => {
  if(gameState.isCorrect) {
    getNewWord();
    setGameState((prevState) =>({
      ...prevState,
      isCorrect : false
    }))
  }}, [gameState.isCorrect]);



const getNewWord = () =>{
  const randomIndex = Math.floor(Math.random() * 200);
  const word = words[randomIndex];
  const scrambledWord = scrambleWord(word);
  debugger;
  setGameState((prevState) => ({
    ...prevState,
    word:word,
    scrambledWord : scrambledWord
  }))
  console.log(word);
}

const scrambleWord = (word) => {
  const chars = word.split('');
  let scrambled = word;
  while(scrambled === word) {
    scrambled = chars.sort(() => Math.random() - 0.5).join('');
  }
  return scrambled;
};

const checkInput = (input) => {
  debugger
  if (input && input.toLowerCase() === gameState.word.toLowerCase()) {  
    const newScore = gameState.userScore + 1;
    const resetTime = gameState.resetTimerKey + 1;  
    setGameState((prevState) => ({
      ...prevState,
      isCorrect: true,
      userScore : newScore,
      resetTimerKey : resetTime
    }))
  } else {
    alert("Game over");
    navigate('/'); // Navigate to home page;
  }
}

const handleTimeUp = () => {
  // alert('Game Over');
  navigate('/');
}

const handleSubmit = (e) => {
  e.preventDefault(); 
  checkInput(gameState.userInput); // call checkInput with user input
  setGameState((prevState) => ({
    ...prevState,
    userInput : ''
  })) // clear input box
};

  return (
    <>
      <div>
        <Timer
        seconds = {30} onComplete={handleTimeUp} reset = {gameState.resetTimerKey}
        />
       <form onSubmit={handleSubmit}>
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
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      <p>scrambled word : {gameState.scrambledWord}</p>

      <p>Score : {gameState.userScore} </p>
      </div>
    </>
  );
};

export default Game;
