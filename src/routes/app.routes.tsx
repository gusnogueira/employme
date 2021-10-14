import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Processos from '../pages/Processos/views';
import Dashboard from '../pages/Dashboard/views';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/processos" exact component={Processos} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default AppRoutes;
