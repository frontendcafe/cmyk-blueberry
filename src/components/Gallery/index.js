import './styles.scss';
import IMAGES from './data';

const Gallery = () => {
    return(
        <section className="gallery">
            <h1 className="gallery__title">Galería</h1>
            <div className="gallery__grid">
                <img className="gallery__grid__img--1 img--square" src={ IMAGES.vino } alt="" />
                <img className="gallery__grid__img--2 img--square" src={ IMAGES.copa } alt="" />
                <img className="gallery__grid__img--3 img--square" src={ IMAGES.copas } alt="" />
                <div className="gallery__grid__center"><img src={ IMAGES.vinos } alt="" /></div>
                <img className="gallery__grid__img--4 img--square" src={ IMAGES.barriles } alt="" />
                <img className="gallery__grid__img--5 img--square" src={ IMAGES.uvas } alt="" />
                <img className="gallery__grid__img--6 img--square" src={ IMAGES.viniedo } alt="" />
            </div>
        </section>
    )
}

export default Gallery;