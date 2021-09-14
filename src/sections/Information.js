import Button from '../components/Button';
import CardMobile from '../components/CardsMobile';
import mobileInfo from '../components/CardsMobile/data.json';
import BarrillesLogo from '../assets/icon-barriles.png';
import ViniedoImg from '../assets/viniedo.png';
import './styles.scss';

export const Information = () => {
  return (
    <section className="information">
      {
        mobileInfo
          .map(info => 
            <CardMobile 
              logo={BarrillesLogo}
              img={ViniedoImg}
              title={info.title}
              description={info.description} />)
      }
      <Button variant="blueborder" text="Más información" />
    </section>
  );
};

export default Information;
