import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, HashRouter, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Videos from './Videos';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


function App() {
    return (
            <Router>
                <Switch>
                    <Route path="/signup" exact component={SignUp} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/videos" exact component={Videos} />
                </Switch>
            </Router>
        );

}

export default App;
