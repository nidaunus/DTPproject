import * as React from "react";
import { Router as BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import AuthService from "../services/auth"

class Router extends React.Component {

  renderPrivate({ isExact, id, path, component: Component }) {
    console.log("State", this.props.history.location)
    const { isLoggedIn } = this.props.auth
    return (
      <Route
        exact={isExact}
        key={`route-${id}`}
        path={path}
        render={(props) => (
          isLoggedIn
            ? <Component {...props} />
            : <Redirect to={
              {
                pathname: '/login',
                state: { target: this.props.history.location }
              }} />)}
      />
    )
  }

  renderPublic({ isExact, id, path, component: Component }) {
    return (
      <Route
        exact={isExact}
        key={`route-${id}`}
        path={path}
        render={(props) => (<Component {...props} />)}
      />
    )
  }

  renderRoutes() {
    return this.props.routers?.map((route) => {
      if (route.private) {
        return this.renderPrivate(route)
      }
      return this.renderPublic(route)
    })
  }

  render() {
    console.log("RouterProps", this.props)
    return (
      <BrowserRouter history={this.props.history}>
        <Switch>
          {this.renderRoutes()}
        </Switch>
      </BrowserRouter>
    )
  }
}
export default observer(Router);