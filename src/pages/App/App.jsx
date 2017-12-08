import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import Catalog from '../../components/Catalog/Catalog'
import Checkout from '../../components/Checkout/Checkout'
import Confirmation from '../../components/Confirmation/Confirmation'



import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          When does the narwhal bacon?
        </header>
        <Switch>
          <Route exact path="/" render={() => <Catalog/> }/>
          <Route path='/checkout' render={() => <Checkout />}/>
          <Route path='/confirmation' render={() => <Confirmation />} />
        </Switch>
      </div> 
    );
  }
}

export default App;
