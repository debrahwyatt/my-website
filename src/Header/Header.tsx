import './Header.css';
import Banner from './Banner';
import BackBtn from './BackBtn';
import Socials from './Socials';

interface headerProps {
  bannerText: string,
  setBannerText: (text: string) => void
}

const Header = (props: headerProps) => {

    return (
      <header className="header">
        <Banner bannerText={props.bannerText}/>
        <BackBtn setBannerText={props.setBannerText}/>
        <Socials/>
      </header>
    );
}

export default Header;
