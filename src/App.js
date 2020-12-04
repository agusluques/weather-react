import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_HOME } from './constants/routes';
import HomePage from './components/Home/home';

const App = () => {
   return (
      <Switch>
         <Route path={ROUTE_HOME} component={HomePage} />
      </Switch>
   )
}

export default App
