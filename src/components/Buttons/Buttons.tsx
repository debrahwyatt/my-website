import { Link } from 'react-router-dom';
import './Buttons.css';

interface ButtonProps {
  url: string;
  title: string;
}

const Buttons = (props: ButtonProps) => {
  
  const hover = document.getElementById("hover_sound") as HTMLAudioElement;
  const hover_sound = () => {
    hover.volume = 0.2
    hover.play()
  }
  
  return (
    <div className="box center">
      <Link to={props.url} onMouseOver={hover_sound} className='link floating_box center h2'>
        <h2>{props.title}</h2>
      </Link>
    </div>
  );
}

export default Buttons;