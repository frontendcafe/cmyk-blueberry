import './styles.scss';

function CardDesktop({ children, type = 'secondary', title, icon, cover }) {
  return (
    <article className={`card-desktop ${type}`}>
      <header className="card-desktop__header">
        { icon && <img src={icon} title="Card icon" alt="Card icon" /> }
        <h3 className="card-desktop__header--title">
          { title }
        </h3>
      </header>
      <div className="card-desktop__content">
        { children }
      </div>
      { cover && <img src={cover} title="Card cover" alt="Card cover" className="card-desktop__image" /> }
    </article>
  );
}

export default CardDesktop;
