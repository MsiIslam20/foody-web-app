import React, { createContext, useState } from 'react';
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
import Chekout from './components/Checkout/Chekout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Foods />
            <Features />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>  
          <PrivateRoute path="/checkout">
            <Header />
            <Chekout />
          </PrivateRoute>
          <Route path="/food/:id">
            <Header />
            <SingleFood />
          </Route>        
        </Switch>        
      </Router>
    </UserContext.Provider>
  );
}

export default App;
