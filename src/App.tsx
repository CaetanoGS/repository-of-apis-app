import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import {Signup} from "./registration/signup";
import {Signin} from "./login/signin";
import {Dashboard} from "./dashboard/dashboard";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Signin/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
      </Router>

          );
}

export default App;
