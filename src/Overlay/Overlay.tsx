import './Overlay.css';

interface OverlayProps {
  isOpen: boolean;
  hideOverlay: () => void;
};

const Overlay = (props: OverlayProps) => {
    
  const onClose = () => {
    const left_door = document.getElementById("left-door") as HTMLDivElement
    left_door.style.animationPlayState = 'running';

    const right_door = document.getElementById("right-door") as HTMLDivElement
    right_door.style.animationPlayState = 'running';
    
    const overlay_bg = document.getElementById("overlay_bg") as HTMLDivElement
    overlay_bg.style.animationPlayState = 'running';

    const blast_btn = document.getElementById("blast-btn") as HTMLDivElement
    blast_btn.style.display = "none"

    const blast_door = document.getElementById("blast_door_sound") as HTMLAudioElement;
    blast_door.volume = 0.1
    blast_door.play()

    const music = document.getElementById("music") as HTMLAudioElement
    music.volume = 0.25
    music.play()

    props.hideOverlay();
  }

  return (
    <div id="overlay">
      <button id="blast-btn" onClick={onClose}><h1>Enter</h1></button>
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
