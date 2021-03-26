import {
  IsLoggedContext,
  IsLoggedContextInterface,
} from 'context/IsLoggedContext';
import AboutPage from 'pages/AboutPage';
import HomePage from 'pages/HomePage';
import ProfilePage from 'pages/ProfilePage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';

const Routes: React.FC = () => {
  const { isLogged } = useContext(IsLoggedContext) as IsLoggedContextInterface;
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/about'>
        <AboutPage />
      </Route>
      <Route path='/sign-in'>
        {isLogged ? <Redirect to='/' /> : <SignInPage />}
      </Route>
      <Route path='/sign-up'>
        {isLogged ? <Redirect to='/' /> : <SignUpPage />}
      </Route>
      <Route path='/profile'>
        {isLogged ? <ProfilePage /> : <Redirect to='/sign-in' />}
      </Route>
    </Switch>
  );
};

export default Routes;
