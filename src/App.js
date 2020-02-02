import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AuthCallback from './components/AuthCallback';
import InitAuth from './components/InitAuth';
import Header from './components/Header';
import WorkflowController from './components/WorkflowController';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/auth-callback">
            <AuthCallback />
          </Route>
          <Route path="/init-auth">
            <InitAuth />
          </Route>
          <Route path="/">
            <WorkflowController />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
