import Navbar from "./components/Navbar";
import Sucursales from "./views/sucursales/index.js"
import Gallery from './components/Gallery/index';
import AboutUS from "./views/aboutUS";
import News from "./views/news";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
          <Switch>
            <Route path="/home" exact>
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
              <Sucursales></Sucursales>
              <Gallery></Gallery>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;