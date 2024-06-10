import './Sun.css';
import trollface from './trollface.png'

const Sun = () => {

  const SunClick = () => {
    console.log("HERE")
    const troll = document.getElementById("troll") as HTMLElement;
    troll.style.visibility = 'visible';
  }

    return (
      <div className="sun_holder" onClick={SunClick}>
        <div className='sun'>
          <img src={trollface} alt="troll face" id='troll' width="80%"/>
        </div>
      </div>
    );
}

export default Sun;