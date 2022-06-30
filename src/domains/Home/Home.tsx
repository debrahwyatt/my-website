import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  const hover = document.getElementById("hover_sound") as HTMLAudioElement;
  const hover_sound = () => {
    hover.volume = 0.2
    hover.play()
  }

  return (
    <div className="box-holder center">
      <div className="box center">
        <Link to='/ai' onMouseOver={hover_sound} className='link floating_box center h2'><h2>AI</h2></Link>
      </div>
      <div className="box">
        <Link to='/uml' onMouseOver={hover_sound} className='link floating_box center'><h2>UML</h2></Link>
      </div>
      <div className="box">
        <Link to='/stats' onMouseOver={hover_sound} className='link floating_box center'><h2>Stats</h2></Link> 
      </div>
      <div className="box">
        <Link to='/docs' onMouseOver={hover_sound} className='link floating_box center'><h2>Docs</h2></Link>
      </div>
    </div>
  )
}

export default Home
