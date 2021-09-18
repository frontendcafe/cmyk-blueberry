import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Sucursales from "./views/sucursales/index.js"
import Gallery from './components/Gallery/index';
import Information from './sections/Information';

function App() {

  const [hideSucursales, setHideSucursales] = useState(false);

  const handleClick = () => {
    setHideSucursales(!hideSucursales);
  }

  return (
    <div className="App">
      <Navbar/>
      <Information handleClick={handleClick} />
      {hideSucursales ? <Sucursales /> : null }
      <Gallery />
      
    </div>
  );
}

export default App;