import AboutPage from 'pages/AboutPage';
import HomePage from 'pages/HomePage';
import ProfilePage from 'pages/ProfilePage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import { Route, Switch } from 'react-router';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/about'>
        <AboutPage />
      </Route>
      <Route path='/sign-in'>
        <SignInPage />
      </Route>
      <Route path='/sign-up'>
        <SignUpPage />
      </Route>
      <Route path='/profile'>
        <ProfilePage />
      </Route>
    </Switch>
  );
};

export default Routes;
