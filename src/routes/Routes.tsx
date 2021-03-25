import AboutPage from 'pages/AboutPage';
import HomePage from 'pages/HomePage';
import SignInPage from 'pages/SignInPage';
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
    </Switch>
  );
};

export default Routes;
