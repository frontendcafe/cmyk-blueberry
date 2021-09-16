import Navbar from "./components/Navbar";
import Main from "./components/Main/index";
import Sucursales from "./views/sucursales/index.js"
import Gallery from './components/Gallery/index';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
      <Sucursales />
      <Gallery />
    </div>
  );
}

export default App;