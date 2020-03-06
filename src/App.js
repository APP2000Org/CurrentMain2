import React from 'react';
import './App.css';
import NavBar from "./Components/Header/NavBar";
import GmapsContainer from "./Components/Gmaps/GmapsContainer";
import MainContainerGrid from "./Components/Main/MainContainerGrid";

function App() {
  return (
      <div>
   <NavBar/>
   <GmapsContainer/>,
   <MainContainerGrid/>,
      </div>
  );
}

export default App;
