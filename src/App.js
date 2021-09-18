import Navbar from "./components/Navbar";
import Main from "./components/Main/index";
import Sucursales from "./views/sucursales/index.js"
import Gallery from './components/Gallery/index';
import AboutUS from './views/aboutUS';
import News from './views/news';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/home" exact>
          <Main />
          <Sucursales></Sucursales>
          <Gallery></Gallery>
        </Route>
        <Route path="/sobre-nosotros" exact>
          <AboutUS></AboutUS>
        </Route>
        <Route path="/lo-nuevo" exact>
          <News></News>
        </Route>
        <Route path="/" exact>
          <Main />
          <Sucursales></Sucursales>
          <Gallery></Gallery>
        </Route>
      </Switch>
    </div>
  );
}

function AppWithProviders() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithProviders;
