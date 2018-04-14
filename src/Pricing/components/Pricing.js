import React, { Component } from 'react';
import './Pricing.css';
import { CreatePR,SearchPR,ViewPR,PricingHeader } from './Components';
import { Redirect, Switch, Route } from 'react-router-dom';
import {connect } from 'react-redux';
import { getRepos } from '../actions'
import RepoComponent from './RepoComponent';

class PricingRootComponent extends Component {

  componentDidMount(){
    this.props.GetRepos();
  }
  render() {

    return (
      <div className="App">
        <PricingHeader match={this.props.match}/>
        <RepoComponent/>
          <Switch>
            <Route exact path={`${this.props.match.url}`} component={CreatePR} />
            <Route exact path={`${this.props.match.url}/Search`} component={SearchPR} />
            <Route path={`${this.props.match.url}/View/:number`} component={ViewPR} />
  
          </Switch>
        
      </div>
    );
  }


}
const mapDispatchToProps = dispatch =>({
  GetRepos:() => dispatch(getRepos())
})


export default connect(null,mapDispatchToProps)(PricingRootComponent);
