import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Provider } from 'mobx-react';
import Router from './Router'
import React from 'react';

const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
};

class Providers extends React.Component {
  constructor(props){
    super(props)
    this.history = syncHistoryWithStore(this.props.history, routingStore)
  }
  render() {
    console.log("Providerprops", this.props)
    console.log("history", this.history)
    return (
      <Provider {...stores}>
        <Router
          routers={this.props.routers}
          history={this.history}
          auth={this.props.auth}
        />
      </Provider>
    )
  }
}

export default Providers;

