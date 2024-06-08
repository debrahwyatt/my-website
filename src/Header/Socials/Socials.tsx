import './Socials.css';
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import HoverSound from '../../Sound/HoverSound';

const Socials = () => {
  const hover_sound = HoverSound()

    return (
      <span id='social_links'>
        <a href='https://github.com/debrahwyatt' className='links' target="_blank">
          <div className='social_box'>
            <FaGithub id="github_icon" onMouseEnter={hover_sound} className="header_icon"/>
          </div>
        </a>
        <a href='https://www.linkedin.com/in/debrah-wyatt/' className='links' target="_blank">
          <div className='social_box'>
            <FaLinkedin id="linkedin_icon" onMouseEnter={hover_sound} className="header_icon"/>
          </div>
        </a>
      </span>
    );
}

export default Socials;
