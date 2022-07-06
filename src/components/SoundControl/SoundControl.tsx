import { Icon, IconButton, ImageIcon } from "@fluentui/react";
import './SoundControl.css';

const SoundControl = () => {

  const mute = () => {
    const music = document.getElementById("music") as HTMLAudioElement;
    if(music.muted === true) music.muted = false
    else music.muted = true;
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
      <button onClick={mute}>mute</button>
    </div>
  )
}

export default SoundControl
