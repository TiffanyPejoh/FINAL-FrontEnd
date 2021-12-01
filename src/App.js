import React from "react";
import './assets/styles.css';
import './assets/item.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import GameDetail from './components/GameDetail'
import { Routes, Route } from "react-router-dom";

const App  = () => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":gamesId" element={<GameDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
