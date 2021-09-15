import Navbar from "./components/Navbar";
import Sucursales from "./views/sucursales/index.js"
import Gallery from './components/Gallery/index';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sucursales />
      <Gallery />
    </div>
  );
}

export default App;