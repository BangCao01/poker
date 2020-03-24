import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { SocketService } from './SocketService';
import { ChatContext } from './ChatContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import {Router, Route} from 'react-router';
import App from './App';
import Login from './users/Login';
import Poker from './games/Poker';
import { BrowserRouter } from 'react-router-dom';
import { GlobalHistory } from './commons/history';
const chat = new SocketService();

ReactDOM.render(
  <BrowserRouter>
  <GlobalHistory /> 
  <ChatContext.Provider value={chat}>
  <Route path="/index">
    <App />
    </Route>
    <Route path="/login">
            <Login />
          </Route>

          <Route path="/poker">
            <Poker />
          </Route>
  </ChatContext.Provider>
  
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
