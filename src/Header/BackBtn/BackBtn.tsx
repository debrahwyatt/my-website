import './BackBtn.css';
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
// import { HoverSound } from "../../Sound/HoverSound"


const BackBtn = () => {
  
  const navigate = useNavigate();

  const goToPreviousPath = () => {
    navigate('/');
  };

    return (
      <div onClick={goToPreviousPath} className='back_btn'>
        {/* <FaArrowLeft id="back_btn" className="header_icon" onMouseOver={HoverSound}/> */}
        <FaArrowLeft id="back_btn" className="header_icon"/>
      </div>
    );
}

export default BackBtn;