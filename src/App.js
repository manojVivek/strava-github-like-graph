import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
          <Route path={`${process.env.PUBLIC_URL}/auth-callback`}>
            <AuthCallback />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/init-auth`}>
            <InitAuth />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/`}>
            <WorkflowController />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
