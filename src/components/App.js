import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import FEEDPage from './Pages/FeedPage'
import '../styles/App.css';

class App extends Component {
    /*Added MainRoute Component For App Routing*/
    render() {
        return (
            <div>
                <header >
                    <h1>RSS FEEDS</h1>
                </header>
                <Switch>
                    <Route exact path='/' component={FEEDPage} />
                </Switch>
                <footer>
                    <h1>REACT REDUX FEEDS  </h1>
                </footer>
            </div>
        );
    }
}

export default App;