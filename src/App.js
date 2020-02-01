import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AuthCallback from './components/AuthCallback';
import InitAuth from './components/InitAuth';
import ActivityGraph from './components/ActivityGraph';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/auth-callback">
            <AuthCallback />
          </Route>
          <Route path="/init-auth">
            <InitAuth />
          </Route>
          <Route path="/">
            <ActivityGraph />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
