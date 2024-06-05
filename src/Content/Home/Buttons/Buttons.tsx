import { useNavigate } from 'react-router-dom';
// import HoverSound from '@sound/HoverSound';
import HoverSound from '../../../Sound/HoverSound';
// import Magic from '../../../Magic';
import './Buttons.css';

interface ButtonProps {
  url: string
  title: string
  setBannerText: (text: string) => void
}

const Buttons = (props: ButtonProps) => {
  
  const navigate = useNavigate();
  const hover_sound = HoverSound()
  const goToPreviousPath = () => {
    navigate(props.url);
  };
  // const updateBanner = () => {
  //   Magic(props.title);
  // }
  
  return (
    <div className="box center">
      <div onClick={goToPreviousPath} onMouseOver={hover_sound} className='link floating_box center h2'>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default Buttons;