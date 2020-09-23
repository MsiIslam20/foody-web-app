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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Foods />
      </Router>
    </>
  );
}

export default App;
