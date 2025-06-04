import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Game = ({ isStarted }) => {
  const [scrambledWord, setScrambledWord] = useState("");
  //api call to get a random word

  const getRandomWord = async () => {
    const url = "https://random-words5.p.rapidapi.com/getMultipleRandom";

    try {
      const response = await axios.get(url, {
        params: { count: 1 },
        headers: {
          "x-rapidapi-host": "random-words5.p.rapidapi.com",
          "x-rapidapi-key":
            "b46d8de99amshc3f87ccedb50fd4p131168jsn4a983a8cfd02",
        },
      });

      return response.data[0];
    } catch (error) {
      console.error("Error fetching random word:", error);
      throw error; //
    }
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["randomWord"],
    queryFn: getRandomWord,
    enabled: isStarted,
    refetchOnWindowFocus: false,
  });
  
  useEffect(() => {
    if (data) {
      setScrambledWord(data);
    }
  }, [data]);

  return (
    <>
      <div>
        <h1>{scrambledWord}</h1>
      </div>
    </>
  );
};

export default Game;
