import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css'
import Header from './components/header-component/Header';
import Home from './components/home-component/Home';

function App() {

  return (
    <>
    <Router>
    <Header/> 
    <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>     
    </>
  )
}

export default App
