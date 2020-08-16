import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Landing from './Components/Layout/Landing';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

//redux
//import {Provider} from 'react-redux';
//import store from './store';

import './App.css';

function App(){
  //<Provider store={store}>
  const [registeredUser, setRegisteredUser] = useState([]);
  
return(
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register}  />
          <Route exact path='/login' component={Login}  />
        </Switch>
      </section>
    </Fragment>
  </Router>
)
};
//</Provider>

export default App;
