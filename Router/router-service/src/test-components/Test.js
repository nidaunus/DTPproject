import React, { Component } from 'react'
import RoutingService from '../services/routing';
import { observer } from "mobx-react";

class Test extends React.Component {
  componentDidMount() {
    console.log("TestsetQueryString", RoutingService.setQueryString(this.props.history.location))
  }

  test1() {
    if (this.props.history.location.search === '?name=nida') {
      console.log("Test1setQueryString", RoutingService.setQueryString(this.props.history.location))
      return (
        <div>Test 1 sayfası</div>
      )
    }
  }

  render() {
    return (
      <div> Test component.
        <br />
        <button onClick={() => RoutingService.goTo('/test', { name: 'nida' })}>Test 1 page</button>
        {this.test1()}
      </div>
    )
  }

}

export default observer(Test);