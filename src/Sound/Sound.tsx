import { useEffect } from 'react';
import beachAmbiance from './media/beach-ambiance.mp3';
import blast_door from './media/blast-door.mp3';
import hover_sound from './media/hover_button.mp3';

const Sound = () => {

  useEffect(() => {
    const hoverSound = document.getElementById("hover_sound") as HTMLAudioElement;
    hoverSound.volume = 0.25;
  }, []); 
  
  return (  
    <div id="sound">
      <audio loop id="music" className='audio'>
        <source src={beachAmbiance} type="audio/mpeg" />
      </audio>
      <audio id="hover_sound" className='audio'>
        <source src={hover_sound} type="audio/mpeg" />
      </audio>
      <audio id="blast_door_sound" className='audio'>
        <source src={blast_door} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Sound;
