import './BackBtn.css';
import { FaArrowLeft } from "react-icons/fa"
import { hoverSound } from "../Sound/Sound2"
import { useHistory } from "react-router-dom";


const BackBtn = () => {
  
    let history = useHistory();
    const goToPreviousPath = () => {
      history.push('/')
    }

    return (
      <div onClick={goToPreviousPath} className='back_btn'>
        <FaArrowLeft id="back_btn" className="header_icon" onMouseOver={hoverSound}/>
      </div>
    );
}

export default BackBtn;