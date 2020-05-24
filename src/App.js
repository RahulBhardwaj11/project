import React from 'react';
import logo from './logo.svg';
import classes from './App.module.scss';
import NavBar from './container/navbar/navbar'
import Page2 from './component/Page2/Page2'
import Page1 from './component/Page1/Page1';
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className={classes.App}>
      <NavBar />
      <div className={classes.divider}></div>
      <Switch>
        <Route path="/page2" component={Page2} />
        <Route path="/" component={Page1} />

      </Switch>

      <footer><p>Footer Text</p></footer>
    </div>
  );
}

export default App;
