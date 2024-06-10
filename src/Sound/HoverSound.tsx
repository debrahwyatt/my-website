
const HoverSound = () => {
  const hover = document.getElementById("hover_sound") as HTMLAudioElement;
  const hover_sound = () => {  
    hover.play()
  }
  return hover_sound
}

export default HoverSound;
