import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles"
import { useStyles } from '../styles/Button.style'
import { RoutingService } from 'router-service';
import { observer } from "mobx-react";

class Home extends React.Component {

  componentDidMount() {
    console.log("HomesetQueryString", RoutingService.setQueryString(this.props.history.location))
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        Welcome. This is Home Page <br />
        <Button variant='contained' color='secondary' className={classes.root} onClick={() => RoutingService.goTo('/test')}>
          Go To Test Page
      </Button>
      </div>
    )
  }
}

export default observer(withStyles(useStyles)(Home));