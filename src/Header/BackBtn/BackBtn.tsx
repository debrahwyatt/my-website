import './BackBtn.css';
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { HoverSound } from '../../Sound';
// import { HoverSound } from "../../Sound/HoverSound"


const BackBtn = () => {
  const hover_sound = HoverSound()
  const navigate = useNavigate();
  const goToPreviousPath = () => {
    navigate('/');
  };

    return (
      <div onClick={goToPreviousPath} onMouseEnter={hover_sound} className='back_btn'>
        <FaArrowLeft id="back_btn" className="header_icon"/>
      </div>
    );
}

export default BackBtn;