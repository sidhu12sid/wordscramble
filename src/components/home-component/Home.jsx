import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

 const [scrambledWord, setScrambledWord] = useState('');

 const getRandomWord  = async() => {
  const url = "https://random-words5.p.rapidapi.com/getMultipleRandom";

await axios.get(url,{
    params:{
      count : 1
    },   
  headers: {
    'x-rapidapi-host': 'random-words5.p.rapidapi.com',
    'x-rapidapi-key': 'b46d8de99amshc3f87ccedb50fd4p131168jsn4a983a8cfd02'
  }
  }).then(response => {
    setScrambledWord(response.data[0]);
  }).catch(error => {
    console.error("Error fetching random word:", error);
  });
 }


  return (
    <>
     <div>
      
      <p>the scrambled word is  {scrambledWord}</p>
     </div>
    </>
  )
}
export default Home
