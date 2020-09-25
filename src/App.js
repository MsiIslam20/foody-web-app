import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Foods from './components/Foods/Foods';
import Features from './components/Features/Features';
import SingleFood from './components/SingleFood/SingleFood';
import SignUp from './components/Auth/SignUp';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <Foods />
            <Features />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>  
          <Route path="/food/:id">
            <SingleFood />
          </Route>        
        </Switch>        
      </Router>
    </>
  );
}

export default App;
