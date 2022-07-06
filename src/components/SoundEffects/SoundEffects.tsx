import hover_sound from './hover_button.mp3';
import blast_door from './blast-door.mp3';

const SoundEffects = () => {
  
  return (  
    <div>
      <audio preload="metadata" id="hover_sound">
        <source src={hover_sound}></source>
      </audio>
      <audio preload="metadata" id="blast_door_sound">
        <source src={blast_door}></source>
      </audio>
    </div>
  )
}

export default SoundEffects
