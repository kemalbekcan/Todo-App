import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import NotFound from './screens/NotFound';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
