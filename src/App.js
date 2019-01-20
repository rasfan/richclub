import React, { Component } from 'react';
import './App.css';
import Home from "./Components/home-page/Home";
import Welcome from "./Components/welcome/Welcome";
import SignIn from "./Components/sign-in/Sign-in";
import Register from "./Components/register/Register";
import Dashboard from "./Components/dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
      <Router>
        <Route path="/Sign-in" component={SignIn} />
      </Router>
      <Router>
        <Route path="/register" component={Register} />
      </Router>
      <Router>
        <Route path="/dashboard" component={Dashboard} />
      </Router>
      <Router>
        <Route path="/welcome" component={Welcome} />
      </Router>

      </div>
    );
  }
}

export default App;
