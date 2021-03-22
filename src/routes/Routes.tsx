import HomePage from 'pages/HomePage';
import { Route, Switch } from 'react-router';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
