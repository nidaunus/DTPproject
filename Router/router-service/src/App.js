import routers from './test-components/routers'
import React from 'react'
import Providers from './components/Providers'
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