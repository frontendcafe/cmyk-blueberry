import { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Sucursales from './views/sucursales/index.js';
import Gallery from './components/Gallery/index';
import AboutUS from './views/aboutUS';
import News from './views/news';
import {
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const useScrollToHash = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    const { hash, pathname } = location;
    if (pathname !== '/' && pathname !== 'home') return;
    if (!hash) return;

    const sectionToScroll = document.querySelector(hash);
    if (!sectionToScroll) return;

    const timeoutId = setTimeout(() => {
      sectionToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [location]);
};

function App() {
  useScrollToHash();

  return (
    <div className="App">
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
