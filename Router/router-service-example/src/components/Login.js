import React from 'react';
import { observer } from "mobx-react";
import AuthService from "../services/auth"
import { RoutingService } from 'router-service';
import { Button } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles"
import { useStyles } from '../styles/Button.style'

class Login extends React.Component {

  login(target) {
    AuthService.setAuth("2342423423")
    console.log("target", target)
    console.log("target", RoutingService.setQueryString(target))
    const path = RoutingService.setQueryString(target)
    console.log(path.pathname, path.search)
    RoutingService.goTo(path.pathname, path.search)
  }

  render() {
    const { classes } = this.props
    const { target } = this.props.location.state || { target: { pathname: '/' } };
    return (
      <div>
        Login sayfası
        <br />
        <Button variant='contained' color='secondary' className={classes.root} onClick={() => { this.login(target) }}>
          Login
      </Button>
      </div>
    )

  }
}

export default observer(withStyles(useStyles)(Login));