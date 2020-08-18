import React from 'react';
import 'reset-css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/home'
// import Storage from './storage'
import { useEffect } from 'react';
import axios from './util/axios';
// import axios from 'axios'

function App(props) {
  useEffect(() => {
    axios.get('/soso/fcgi-bin/client_search_cp?p=1&n=2&w=泡沫&format=json').then(value => {
      console.log(value)
    })
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
