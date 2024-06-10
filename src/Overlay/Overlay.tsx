import './Overlay.css';

interface OverlayProps {
  isOpen: boolean;
  hideOverlay: () => void;
};

const Overlay = (props: OverlayProps) => {
    
  const onClose = () => {
    // const music = document.getElementById("music") as HTMLAudioElement
    const blast_btn = document.getElementById("blast-btn") as HTMLDivElement
    const left_door = document.getElementById("left-door") as HTMLDivElement
    const right_door = document.getElementById("right-door") as HTMLDivElement
    const overlay_bg = document.getElementById("overlay_bg") as HTMLDivElement
    const blast_door = document.getElementById("blast_door_sound") as HTMLAudioElement;

    // music.volume = 0.25
    // music.play()

    blast_door.volume = 0.1    
    blast_door.play()    

    blast_btn.style.display = "none"
    left_door.style.animationPlayState = 'running';
    right_door.style.animationPlayState = 'running';
    overlay_bg.style.animationPlayState = 'running';

    props.hideOverlay();
  }

  return (
    <div id="overlay">
      <button id="blast-btn" onClick={onClose}>
        <h1>Enter</h1>
      </button>
      <div id="left-door" className="centered blast-door blast-door-left">
      <div className="sign2 centered">
          <div className='sign_text'>
            TURN AROUND
          </div>
        </div>
      </div>
      <div id="right-door" className="centered blast-door blast-door-right">
        <div className="sign1 centered">
          BEWARE!
        </div>
      </div>
      <div id="overlay_bg"/>
    </div>
  );
}

export default Overlay;
