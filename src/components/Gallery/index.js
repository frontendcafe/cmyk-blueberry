import './styles.scss';
import IMAGES from './data';

const Gallery = () => {
    return(
        <section className="gallery">
            <h1 className="gallery__title">Galería</h1>
            <div className="gallery__grid">
                <img grid-area="top1" className="gallery__img img--square" src={ IMAGES.vino } alt="" />
                <img grid-area="top2" className="gallery__img img--square" src={ IMAGES.copa } alt="" />
                <img grid-area="top3" className="gallery__img img--square" src={ IMAGES.copas } alt="" />
                <div grid-area="mid" className="gallery__center"><img src={ IMAGES.vinos } alt="" /></div>
                <img grid-area="btm1" className="gallery__img img--square" src={ IMAGES.barriles } alt="" />
                <img grid-area="btm2" className="gallery__img img--square" src={ IMAGES.uvas } alt="" />
                <img grid-area="btm3" className="gallery__img img--square" src={ IMAGES.viniedo } alt="" />
            </div>
        </section>
    )
}

export default Gallery;