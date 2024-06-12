import './Sun.css';
import trollface from './trollface.png'

const Sun = () => {

  const SunClick = () => {
    const trollQuack = document.getElementById("troll_sound") as HTMLAudioElement;
    trollQuack.volume = 0.125;
    trollQuack.currentTime = 0;
    trollQuack.play();
    
    const troll = document.getElementById("troll") as HTMLElement;
    troll.classList.remove('troll-animate');
    void troll.offsetWidth; // Trigger reflow
    troll.classList.add('troll-animate');
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