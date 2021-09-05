import Button from './components/Button'
import CardDesktop from './components/CardDesktop'

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
        <CardDesktop title="Nuestras bodegas" icon="/images/barriles.png">
          Ubicada en Mendoza, Bodegas Wineberry se encuentra en un mágico lugar.
          Aquí las vides reciben permanente sol, viento suave y seco, y abundante agua,
          que baja de las montañas y se combina con los suelos pedregosos, logrando vinos de alta calidad, frutados y redondos.
        </CardDesktop>

        <CardDesktop type="primary" title="Nuestras proceso" icon="/images/copas.png" cover="/images/cultivo.png">
          Todo el proceso, desde la plantación de viñas, cosecha, elaboración, fraccionamiento, distribución y comercialización,
          es cuidadosamente controlado con un equipamiento tecnológico de última generación, lográndose así resultados por demás satisfactorios.
        </CardDesktop>
      </section>
    </div>
  );
}

export default App;
