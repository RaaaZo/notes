import StylesTemplate from 'templates/StylesTemplate';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/Routes';
import NavigationTemplate from 'templates/NavigationTemplate';
import { IsLoggedContextProvider } from 'context/IsLoggedContext';
import { UserDataContextProvider } from 'context/UserDataContext';

function App() {
  return (
    <Router>
      <StylesTemplate>
        <IsLoggedContextProvider>
          <NavigationTemplate />
          <UserDataContextProvider>
            <Routes />
          </UserDataContextProvider>
        </IsLoggedContextProvider>
      </StylesTemplate>
    </Router>
  );
}

export default App;
