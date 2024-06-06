// import birds from './media/birds.mp3';
// import codeMonkey from './media/code-monkey.mp3';
import beachAmbiance from './media/beach-ambiance.mp3';
import blast_door from './media/blast-door.mp3';
import hover_sound from './media/hover_button.mp3';

const Sound = () => {

  return (  
    <div id="sound">
      <audio loop id="music">
        <source src={beachAmbiance} type="audio/mpeg" />
      </audio>
      <audio preload="metadata" id="hover_sound">
        <source src={hover_sound}></source>
      </audio>
      <audio preload="metadata" id="blast_door_sound">
        <source src={blast_door}></source>
      </audio>
    </div>
  )
}

export default Sound
