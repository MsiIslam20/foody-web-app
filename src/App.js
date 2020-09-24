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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Foods />
        <Features />
      </Router>
    </>
  );
}

export default App;
