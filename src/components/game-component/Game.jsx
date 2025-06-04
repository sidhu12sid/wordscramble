import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Game = ({ isStarted }) => {
  const [scrambledWord, setScrambledWord] = useState("");

  const words = [
    "apple", "banana", "cherry", "date", "elephant", "flower", "grape", "house", "island", "jungle",
    "kite", "lion", "mountain", "notebook", "ocean", "pencil", "queen", "river", "sun", "tree",
    "umbrella", "violet", "window", "xylophone", "yacht", "zebra", "airplane", "bridge", "castle", "diamond",
    "engine", "forest", "garden", "harbor", "iceberg", "jacket", "keyboard", "lamp", "mirror", "needle",
    "orange", "puzzle", "quilt", "rocket", "ship", "train", "unicorn", "violin", "whale", "x-ray",
    "yogurt", "zeppelin", "arch", "boat", "cloud", "drum", "earth", "fire", "globe", "hill",
    "ink", "jewel", "king", "leaf", "moon", "nest", "owl", "pen", "queen", "rain",
    "star", "table", "urn", "vase", "wolf", "xenon", "yard", "zip", "ant", "ball",
    "cat", "dog", "egg", "fish", "goat", "hat", "ice", "jar", "kid", "log",
    "mat", "net", "oak", "pig", "quail", "rat", "sun", "tan", "urn", "van",  "acorn", "beach", "cactus", "dolphin", "eagle", "feather", "garden", "harvest", "iceberg", "jungle",
    "kayak", "ladder", "marsh", "nectar", "orchid", "pebble", "quiver", "ripple", "saddle", "tundra",
    "urchin", "valley", "willow", "xenon", "yarrow", "zephyr", "albatross", "blossom", "canyon", "drizzle",
    "ember", "fjord", "glacier", "hammock", "island", "jigsaw", "kiln", "lagoon", "meadow", "nugget",
    "oasis", "pinnacle", "quartz", "reef", "sprout", "timber", "upland", "vista", "wombat", "xerox",
    "yodel", "zenith", "amber", "breeze", "cliff", "dune", "echo", "fern", "grove", "horizon",
    "iris", "jungle", "knoll", "ledge", "moss", "niche", "opal", "pine", "quail", "ridge",
    "sage", "thicket", "undulate", "vortex", "whisper", "xylem", "yew", "zodiac", "archer", "boulder",
    "crag", "drift", "echo", "fjord", "glen", "hearth", "inlet", "jetty", "knoll", "ledge",
    "moraine", "nimbus", "outcrop", "plateau", "quagmire", "ravine", "shoal", "torrent", "uplift", "valley"  
  ];
  
useEffect(() => {
if(isStarted){
  const randomIndex = Math.floor(Math.random() * 200);
  const word = words[randomIndex];
  console.log(word);
  const scrambledWord = scrambleWord(word);
  setScrambledWord(scrambledWord);
}}, [isStarted]);


const scrambleWord = (word) => {
  const chars = word.split('');
  let scrambled = word;
  while(scrambled === word) {
    scrambled = chars.sort(() => Math.random() - 0.5).join('');
  }
  return scrambled;
};


  return (
    <>
      <div>
        <h1>{scrambledWord}</h1>
      </div>
    </>
  );
};

export default Game;
