import './App.css';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/loginPage/LoginPage.jsx';

function App() {
  return (
    <div className='App'>
      <Route exact path='/login' component={LoginPage}></Route>
    </div>
  );
}

export default App;
