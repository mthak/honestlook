import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, HashRouter, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import Videos from './Videos'

function App() {
    return (
            <Router>
                <Switch>
                    <Route path="/signup" exact component={SignUp} />
                    <Route path="/signin" exact component={SignIn} />
                </Switch>
            </Router>
        );


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Videos />
//     </div>
//   );
}

export default App;
