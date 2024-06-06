import './Buttons.css';
import { useNavigate } from 'react-router-dom';
import HoverSound from '../../../Sound/HoverSound';

interface ButtonProps {
  url: string
  title: string
  setBannerText: (text: string) => void
}

const Buttons = (props: ButtonProps) => {
  
  const hover_sound = HoverSound()
  const navigate = useNavigate()
  const goToPreviousPath = () => {
    navigate(props.url)
    props.setBannerText(props.title)
  };
  
  return (
    <div className="box center">
      <div onClick={goToPreviousPath} onMouseEnter={hover_sound} className='link floating_box center h2'>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default Buttons;
