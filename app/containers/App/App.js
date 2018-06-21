/**
 * App
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. Dashboard)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Dashboard from 'containers/Dashboard/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      defaultTitle="Welcome"
    >
      <meta name="description" content="Data Visualiser" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
