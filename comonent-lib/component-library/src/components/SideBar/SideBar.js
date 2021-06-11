import React from 'react';
import SideBarService from './SideBarService';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  div: {
    background: '#2f353a',
    width: '200px',
    height: '100vh',
    display: 'inline-block',
    justifyContent: 'center',
    position: 'relative',
    top: 0,
    left: 0,
    transition: '350ms',
  },
  nav: {
    background: '#2f353a',
    width: '200px',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    transition: '350ms',
    left: 0,
  },

})

const SideBar = ({ data }) => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <div className={classes.div}>
        {data.map((item, index) => {
          return (
            <SideBarService item={item} key={index} />
          )
        })}
      </div>
    </nav>
  )
}
export default SideBar;