import React, { Component } from 'react';
import './App.css';
import  { Home,Order,Cbr, } from './Components';
import Header from './Header';
import { Redirect, Switch, Route } from 'react-router-dom';
// import { PricingRootComponent } from '../../Pricing';
import {connect } from 'react-redux';
import { getUser } from "../actions";
import { userSelector } from '../selectors';
import {withRouter} from 'react-router-dom';
import { PricingRootComponent } from 'oem-pricingcapability'

class App extends Component {
  componentDidMount(){
    this.props.GetUser();
  }
  render() {

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/pricing' component={PricingRootComponent} />
          <Route path='/order' component={Order} />

          <Route path='/cbr' component={Cbr} />
        </Switch>
        
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
  GetUser:() => dispatch(getUser())
})


export default withRouter( connect(null,mapDispatchToProps)(App));