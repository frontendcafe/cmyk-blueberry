import "./styles.scss";
import CardStore from "../../components/CardStore/index"

const Sucursales = () => {

    return(
        <div id="sucursales-div">
            <h1 className="title">NUESTRAS SUCURSALES</h1>
            <div id="cards">
                <CardStore title="Bodega wineberry
                -Mendoza-" body="Ozamis Norte 375 · General Gutiérrez ·
                M5511APG · Maipú · Mendoza
                +54 9 261 5948023
                infomendoza@bodegaswineberry.com.ar"></CardStore>
                <CardStore isTransparent title="Bodega wineberry
                -Buenos Aires-" body="Godoy Cruz 2025 · C1414CYP ·
                Capital Federal · Buenos Aires
                +54 9 11 26062011
                infobsas@bodegaswineberry.com.ar"></CardStore>
            </div>
        </div>
    )
}

export default Sucursales;