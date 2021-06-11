import React from 'react'
import Menu from './MenuService/index'
import { MenuData } from './MenuData';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu menuData={MenuData}/>
    </Router>
  );
} 

export default App;
