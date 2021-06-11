import { RouterService } from 'react_lib';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <RouterService isAuthenticated Component={Login}/>
    </div>
  );
}

export default App;
