import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Sucursales from "./views/sucursales/index.js"
import Gallery from './components/Gallery/index';
import Information from './sections/Information';

function App() {

  const [moreInfo, setMoreInfo] = useState(false);

  const handleClick = () => {
    setMoreInfo(!moreInfo);
  }

  return (
    <div className="App">
      <Navbar/>
      <Information handleClick={handleClick} moreInfo={moreInfo} />
      {moreInfo ? <Sucursales /> : null }
      <Gallery />
      
    </div>
  );
}

export default App;