import './Header.css';
import Banner from './Banner';
import BackBtn from './BackBtn';
import { hoverSound } from '../Sound';
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Header = () => {

    return (
      <header className="header">
        <Banner/>
        <BackBtn />
        <span className='header_links'>
          <a href='https://github.com/debrahwyatt' target="_blank">
            <FaGithub id="github_icon" className="header_icon" onMouseOver={hoverSound}/>
          </a>
          <a href='https://www.linkedin.com/in/debrah-wyatt-66219a183/' target="_blank">
            <FaLinkedin id="linkedin_icon" className="header_icon" onMouseOver={hoverSound}/>
          </a>
        </span>
      </header>
    );
}

export default Header;