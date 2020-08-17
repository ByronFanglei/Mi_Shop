import React from 'react';
import 'reset-css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/home'
// import Storage from './storage'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // console.log(Storage.getAllStorage())
    // Storage.setItem({'a':1})
  })


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect from='/*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
