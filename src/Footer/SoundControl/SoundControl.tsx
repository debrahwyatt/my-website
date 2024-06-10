import './SoundControl.css';
import { FaVolumeUp } from "react-icons/fa"
import { FaVolumeMute } from "react-icons/fa"


const SoundControl = () => {
  
  let mute = true
  // const music = document.getElementById("music") as HTMLAudioElement;
  const hover_sound = document.getElementById("hover_sound") as HTMLAudioElement;
  const blast_door_sound = document.getElementById("blast_door_sound") as HTMLAudioElement;

  const v_on = document.getElementById("volume-on") as HTMLDivElement;
  const v_off = document.getElementById("volume-off") as HTMLDivElement;

  const Mute = () => {
    
    mute = mute !== true;

    if(mute) {
      hover_sound.muted = blast_door_sound.muted = true
      v_on.style.display = "none"
      v_off.style.display = "inline-block"
      return
    }
    hover_sound.muted = blast_door_sound.muted = false
    v_off.style.display = "none"
    v_on.style.display = "inline-block"
  }

  const volume = (value: number) => {
    hover_sound.volume = blast_door_sound.volume = value / 100
  }

  return (  
    <div className='sound-ctrl'>
      <div className='volume-ctrl'>
        <input 
          type = "range" 
          min = "0" 
          max = "25" 
          defaultValue = "12.5" 
          id = "volume-value"
          onChange = {e => volume(+e.target.value)}
        />
        &nbsp;
        <span className='volume-span'>
          <FaVolumeUp id="volume-on" className='volume-on-off' onClick={Mute}/>
          <FaVolumeMute id="volume-off" className='volume-on-off' onClick={Mute}/>
        </span>
      </div>
    </div>
  )
}

export default SoundControl
