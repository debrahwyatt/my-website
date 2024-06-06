import './Header.css';
import Banner from './Banner';
import BackBtn from './BackBtn';
import { HoverSound } from '../Sound';
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

interface headerProps {
  bannerText: string,
  setBannerText: (text: string) => void
}

const Header = (props: headerProps) => {
  const hover_sound = HoverSound()

    return (
      <header className="header">
        <Banner bannerText={props.bannerText}/>
        <BackBtn setBannerText={props.setBannerText}/>
        <span className='header_links'>
          <a href='https://github.com/debrahwyatt' target="_blank">
            <FaGithub id="github_icon" onMouseEnter={hover_sound} className="header_icon"/>
          </a>
          <a href='https://www.linkedin.com/in/debrah-wyatt/' target="_blank">
            <FaLinkedin id="linkedin_icon" onMouseEnter={hover_sound} className="header_icon"/>
          </a>
        </span>
      </header>
    );
}

export default Header;
