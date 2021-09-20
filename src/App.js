import './App.css';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/navBar/NavBar.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import LoginPage from './pages/loginPage/LoginPage.jsx';
import PasswordReset from './pages/passwordReset/PasswordReset.jsx';
import SignUp from './pages/signUp/SignUp.jsx';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/passwordReset' component={PasswordReset} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
