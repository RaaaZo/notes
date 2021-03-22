import StylesTemplate from 'templates/StylesTemplate';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/Routes';
import NavigationTemplate from 'templates/NavigationTemplate';

function App() {
  return (
    <Router>
      <StylesTemplate>
        <NavigationTemplate />
        <Routes />
      </StylesTemplate>
    </Router>
  );
}

export default App;
