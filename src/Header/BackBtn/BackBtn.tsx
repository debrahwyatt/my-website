import './BackBtn.css';
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { HoverSound } from '../../Sound';

interface backBtnProps {
  setBannerText: (text: string) => void
}

const BackBtn = (props: backBtnProps) => {
  const hover_sound = HoverSound()

  const navigate = useNavigate()
  const goToPreviousPath = () => {
    props.setBannerText("Debrah Wyatt E.I.T.");
    navigate('/');
  };

    return (
      <div onClick={goToPreviousPath} onMouseEnter={hover_sound} className='back_btn'>
        <FaArrowLeft id="back_btn" className="header_icon"/>
      </div>
    );
}

export default BackBtn;
