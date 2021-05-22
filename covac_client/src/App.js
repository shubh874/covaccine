import './App.css';
import React, { useEffect, useState } from 'react';
import Notify from './Notify';
import FindPin from './FindPin';
import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {

  return (
    <div className="App">
    <Router>
        <Switch>
            <Route path="/" exact>
            <NavBar />
            <Home /> 
            </Route>
            <Route path="/findpin" >
                <FindPin />
            </Route>

            <Route path="/notify" >
                <Notify />
            </Route>

        </Switch>
    </Router>
    
     
    </div>
  );
}

export default App;
