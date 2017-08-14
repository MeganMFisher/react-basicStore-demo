import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Store from './components/store/Store';
import Detail from './components/store/detail/Detail';
import Cart from './components/store/Cart';


  export default (
        <Switch>
            <Route path="/store" component={ Store }/>
            <Route path='/detail/:id' component={ Detail }/>
	        <Route path="/cart" component={ Cart }/>
        </Switch>
  )

