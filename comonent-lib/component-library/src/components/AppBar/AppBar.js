import React, { useState } from 'react';
import { AppBar as DTPAppBar, IconButton, Toolbar, MenuItem, Menu, Tooltip, Typography, Icon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Logo } from '../../Logo/logo'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: '120px',
    height: '48px',
    paddingRight: 'inherit',
    margin: '10px',
    verticalAlign: 'middle',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right'
  },
  textStyle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    position: 'relative',
    paddingInlineStart: '450px',
    display: 'table-cell',
    fontFamily: 'sans-serif',
  },
  icon: {
    position: 'absolute',
    right: '20px',
    bottom: '9px',
  },
  toolbar: {
    backgroundColor: 'white',
    color: 'black',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const AppBar = ({ information, logout, menuClick }) => {
  console.log("appbar geldi");
  const classes = useStyles();
  const [openAccount, setOpenAccount] = useState(false);

  const handleProfileMenuOpen = () => {
    setOpenAccount(true);
  };

  const handleMenuClose = () => {
    setOpenAccount(false);
    console.log("metot")
  };

  const accountMenu = () => {
    return (
      <Menu
        anchorOrigin={classes.anchorOrigin}
        id='primary-search-account-menu'
        keepMounted
        transformOrigin={classes.transformOrigin}
        open={openAccount}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    )
  };

  return (
    <div>
      <DTPAppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography component="div" className={classes.logo} >
            <Logo />
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className={classes.menuButton}
            onClick={menuClick}>
            <MenuIcon />
          </IconButton>
          <div>
            <Typography variant='h6' noWrap className={classes.textStyle}>
              {information}
            </Typography>
          </div>
          <div className={classes.sectionDesktop} >
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              color="inherit"
              className={classes.icon}
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile} >
            <IconButton
              aria-label="show more"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              < MoreIcon />
            </IconButton>
          </div >
        </Toolbar>
      </DTPAppBar>
      {accountMenu()}
    </div>
  )
};

AppBar.propTypes = {
  information: PropTypes.string,
  logout: PropTypes.func,
  menuClick: PropTypes.func,
};

AppBar.defaultProps = {
  information: 'VODAFONE TÜRKİYE',
  logout: undefined,
  menuClick: undefined,
};

export default AppBar;