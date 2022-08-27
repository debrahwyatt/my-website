import './Header.css';
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Header = () => {

    return (
      <header className="header">
        <span className='header_links'>
          <a href='https://github.com/debrahwyatt' target="_blank">
            <FaGithub id="github_icon" className="header_icon"/>
          </a>
          <a href='https://www.linkedin.com/in/debrah-wyatt-66219a183/' target="_blank">
            <FaLinkedin id="linkedin_icon" className="header_icon"/>
          </a>
        </span>
      </header>
    );
}

export default Header;