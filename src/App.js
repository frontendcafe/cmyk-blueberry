import Button from './components/Button'
import CardDesktop from './components/CardDesktop'
import BarrilesImg from './assets/barriles.png'
import CopasImg from './assets/copas.png'
import CultivoImg from './assets/cultivo.png'

function App() {
  return (
    <div className="App">
      HOLA BLUEBERRY!!

      <Button />

      <section style={{
        display: 'grid',
        width: '100%',
        gap: '1rem',
        justifyItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}>
        <CardDesktop title="Nuestras bodegas" icon={BarrilesImg}>
          Ubicada en Mendoza, Bodegas Wineberry se encuentra en un mágico lugar.
          Aquí las vides reciben permanente sol, viento suave y seco, y abundante agua,
          que baja de las montañas y se combina con los suelos pedregosos, logrando vinos de alta calidad, frutados y redondos.
        </CardDesktop>

        <CardDesktop type="primary" title="Nuestras proceso" icon={CopasImg} cover={CultivoImg}>
          Todo el proceso, desde la plantación de viñas, cosecha, elaboración, fraccionamiento, distribución y comercialización,
          es cuidadosamente controlado con un equipamiento tecnológico de última generación, lográndose así resultados por demás satisfactorios.
        </CardDesktop>
      </section>
    </div>
  );
}

export default App;
