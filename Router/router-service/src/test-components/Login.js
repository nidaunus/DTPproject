import React from 'react';
import { observer } from "mobx-react";
import AuthService from "../services/auth"
import RouterService from "../services/routing"

class Login extends React.Component {

  login(target) {
    AuthService.setAuth("2342423423")
    console.log("target",RouterService.setQueryString(target))
    const path = RouterService.setQueryString(target)
    RouterService.goTo(path.pathname,path.search)
  }

  render() {
    const {target} = this.props.location.state || {target: {pathname: '/'}};
      return (
        <div> 
          Login sayfası
          <button onClick={()=> {this.login(target)}}>Login</button>
        </div>
      )
    
  }
}

export default observer(Login);