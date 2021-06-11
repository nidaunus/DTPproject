import { Providers } from 'router-service';
import React from 'react';
import routers from './services/router'
import history from './services/history';
import AuthService from './services/auth'


export default class App extends React.Component {

  render() {
    return (
      <Providers
        routers={routers}
        history={history}
        auth={AuthService}
      />
    )
  }
}

