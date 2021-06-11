import React from 'react'
import { withRouter } from "react-router";
import { Button } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles"
import { useStyles } from '../styles/Button.style'
import { RoutingService } from 'router-service';
import { observer } from "mobx-react";

class Test extends React.Component {

  componentDidMount() {
    console.log("TestsetQueryString", RoutingService.setQueryString(this.props.history.location))
  }

  test1() {
    console.log("sd",this.props.history.location)
    if (this.props.history.location.search === '?name=nida') {
      console.log("Test1setQueryString", RoutingService.setQueryString(this.props.history.location))
      return (
        <div>Test 1 sayfası</div>
      )
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div> Test component.
        <br />
            <Button variant='contained' color='secondary' className={classes.root} onClick={() => RoutingService.goTo('/test', { name: 'nida' })}>
          Test 1 Page
            </Button>
        {this.test1()}
      </div>
    )
  }

}

export default observer(withStyles(useStyles)(Test));