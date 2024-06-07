
const HoverSound = () => {
  const hover = document.getElementById("hover_sound") as HTMLAudioElement;
  // hover.volume = 0.25

  const hover_sound = () => {  
    hover.play()
  }
  return hover_sound
}

export default HoverSound;
