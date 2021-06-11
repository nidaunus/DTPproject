import React from 'react'
import RoutingService from '../services/routing';
import { observer } from "mobx-react";

class Home extends React.Component {
  componentDidMount(){
    console.log("HomesetQueryString", RoutingService.setQueryString(this.props.history.location))
  }

  render() {
    return (
      <div> Welcome home page <br />
        <button onClick={() => RoutingService.goTo('/test')}>
          Test Page
            </button>
      </div>
    );
  }
};
export default observer(Home);