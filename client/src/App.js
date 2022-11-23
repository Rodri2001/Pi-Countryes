import React from 'react';
import { Route, Router } from 'react-router-dom';
import Landing from "../src/Components/Landing/Landing"
import Home from "../src/Components/Home/Home"
import './App.css';
import Form from './Components/Form/Form';
import NavBar from './Components/NavBar/NavBar';
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/"><Landing/></Route>
      <Route exact path="/Home"><NavBar/><Home/></Route>
      <Route exact path="/CreateActivity"><Form/></Route>
      <Route exact path="/Detail/:id" ><Detail/></Route>
      
    </React.Fragment>
  );
}

export default App;
