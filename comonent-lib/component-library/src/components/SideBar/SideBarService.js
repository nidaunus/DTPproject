import React, { useState } from 'react';
import { SidebarLink, DropdownLink } from '../../styles/SideBarStyle'
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core'

const useStyles = makeStyles({
  label: {
    margin: '10px',
    color: '#fff',
  },
  div: {
    width: '100%',
    marginLeft: '5px',
  },
  icon: {
    fontSize: '18px',
    position: 'relative',
    top: '3px',
  }
})

const SideBarService = ({ item }) => {
  const classes = useStyles();
  const [subNav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subNav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div className={classes.div}>
          <Icon className={classes.icon}>
            {item.icon}
          </Icon>
          <label className={classes.label}>
            {item.title}
          </label>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subNav &&
        item.subNav.map((itemSub, index) => {
          return (
            <DropdownLink to={itemSub.path} key={index}>
              <Icon className={classes.icon}>
                {itemSub.icon}
              </Icon>
              <label className={classes.label}>
                {itemSub.title}
              </label>
            </DropdownLink>
          )
        })}
    </>
  )
}

export default SideBarService;