import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Store Demo</h2>
        </div>
        <div className='linksBox'>
          <Link to='/store' className='links'>Store</Link>
          <Link to='/cart' className='links'>Cart</Link>
        </div>
                

      </div>
    );
  }
}

export default App;
