import React from 'react';
import {Signup} from "./components/signup";
import {Signin} from "./components/signin";
import {Dashboard} from "./components/dashboard";
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

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
