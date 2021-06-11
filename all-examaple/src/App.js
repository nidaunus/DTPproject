import React from 'react';
import { Menu } from 'menu-lib';
import { LeftMenuData } from './LeftMenu/LeftMenuData'

class App extends React.Component {

  render() { 
    return (
      <Menu menuData={LeftMenuData} />
    )
  }
}
export default App;