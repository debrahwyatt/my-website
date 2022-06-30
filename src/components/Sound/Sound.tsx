import codeMonkey from './media/code-monkey.mp3';
import blast_door from './media/blast-door.mp3';
import hover_sound from './media/hover_button.mp3';

const Sound = () => {

  return (  
    <div>
      <audio loop id="music">
        <source src={codeMonkey} type="audio/mpeg" />
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
