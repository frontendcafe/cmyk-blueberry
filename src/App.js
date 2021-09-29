import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main/index";
import Information from './views/information/Information';
import Sucursales from "./views/sucursales/index.js"
import Gallery from './components/Gallery/index';
import AboutUS from './views/aboutUS';
import News from './views/news';
import ScrollToTop from "./hooks/ScrollToTop";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {

  const [moreInfo, setMoreInfo] = useState(false);

  const handleClick = () => {
    setMoreInfo(!moreInfo);
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" exact>
          <Main />
          <Information handleClick={handleClick} moreInfo={moreInfo} />
          {moreInfo ? <Sucursales /> : null }
          <Gallery />
        </Route>
        <Route path="/sobre-nosotros" exact>
          <AboutUS />
        </Route>
        <Route path="/lo-nuevo" exact>
          <News />
        </Route>
        <Route path="/" exact>
          <Main />
          <Information handleClick={handleClick} moreInfo={moreInfo} />
          {moreInfo ? <Sucursales /> : null }
          <Gallery />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function AppWithProviders() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

export default AppWithProviders;