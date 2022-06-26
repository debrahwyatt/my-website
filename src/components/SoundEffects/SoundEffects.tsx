import hover_sound from './hover_button.mp3';

const SoundEffects = () => {
  return (  
    <div>
      <audio preload="metadata" id="hover_sound">
        <source src={hover_sound}></source>
      </audio>
    </div>
  )
}

export default SoundEffects
