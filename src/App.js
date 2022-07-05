import './App.css';
import Sidebar from './Sidebar';
import Chats from "./Chats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';
import UseWindowDimensions from './UseWindowDimensions';

function App() {

  const [{ user }, dispatch] = useStateValue();
  const { width } = UseWindowDimensions();
  const uid =
    localStorage.getItem("uid") !== undefined ? localStorage.getItem("uid") : null;


  return (
    <div className="app">
      {!user && !uid ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>

              <Route path="/rooms/:roomId">
                <Chats />
              </Route>
              <Route path="/">
                <Chats />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
