import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

// dummy page component
const FluffyPage = () => (
  <div>
    <h1>Fluffy Socks</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/fluffy' component={FluffyPage} />
      </Switch>
    </div>
  );
}

export default App;
