import { FaVolumeMute } from "react-icons/fa"
import { FaVolumeUp } from "react-icons/fa"
import './SoundControl.css';

const SoundControl = () => {
  
  let mute = false
  
  const Mute = () => {
    const v_on = document.getElementById("volume-on") as HTMLDivElement;
    const v_off = document.getElementById("volume-off") as HTMLDivElement;
    const music = document.getElementById("music") as HTMLAudioElement;

    mute = mute !== true;

    if(mute) {
      music.muted = true
      v_off.style.display = "inline-block"
      v_on.style.display = "none"
      return
    }
    music.muted = false
    v_off.style.display = "none"
    v_on.style.display = "inline-block"
  }

  const volume = (value: number) => {
    const music = document.getElementById("music") as HTMLAudioElement;
    music.volume = value / 100
  }

  return (  
    <div className='volume-ctrl'>
      <input 
      type = "range" 
      min = "0" 
      max = "50" 
      defaultValue = "25" 
      onChange = {e => volume(+e.target.value)}
      />
      &nbsp;
      <span>
        <FaVolumeUp id="volume-on" onClick={Mute}/>
        <FaVolumeMute id="volume-off" onClick={Mute}/>
      </span>
    </div>
  )
}

export default SoundControl
