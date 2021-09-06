import Button from './components/Button'
import CardMobile from './components/Cards-mobile/index';
import { cards } from './components/Cards-mobile/data';
import logo from './assets/logo_barril.svg';
import img from './assets/barriles.png';

function App() {
  return (
    <div className="App">
      HOLA BLUEBERRY!!

      <Button />

      {cards.map((card) => {
        return <CardMobile title={card.title} description={card.description} img={img} logo={logo} />
      })}
    </div>
  );
}

export default App;
