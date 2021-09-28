import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main/index";
import Information from './views/information/Information';
import Gallery from './components/Gallery/index';
import AboutUS from './views/aboutUS';
import News from './views/news';
import BodegaWineberry from "./views/bodegaWineberry/index";
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
          <Information />
          <Gallery></Gallery>
        </Route>
        <Route path="/sobre-nosotros" exact>
          <AboutUS></AboutUS>
        </Route>
        <Route path="/lo-nuevo" exact>
          <News></News>
        </Route>
        <Route path="/bodega-wineberry" exact>
          <BodegaWineberry></BodegaWineberry>
        </Route>
        <Route path="/" exact>
          <Main />
          <Information />
          <Gallery></Gallery>
        </Route>
      </Switch>
      <Footer />
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