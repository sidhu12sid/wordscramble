import {Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home-component/Home";
import Game from "./components/game-component/Game";
import Result from "./components/result-component/Result";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    </>
  );
}

export default App;
