import './Cloud.css';
import cloudPNG from './cloud.png'

const CreateCloud = () => {

  const top = 30 + Math.random() * 50
  const scaler = Math.random() * 1 + 1
  const duration = (Math.random() * 30 + 70) + "s"
  const delay = (Math.random() * -100) + "s"

  const cloud = document.createElement("div")
  const element = document.getElementById("cloud_holder") as HTMLDivElement;

  cloud.className ="cloud3"  
  cloud.style.top = top + "%"
  cloud.style.width = cloud.style.height = 2 * scaler + "vw"
  cloud.style.zIndex = "100"
  cloud.style.backgroundColor = "#FFFFFF"
  cloud.style.borderRadius = "50%"
  cloud.style.position = "absolute"
  cloud.style.boxShadow = 
  "#FFFFFF " + (1 * scaler) + "vw 0vh 0 0vh, " +
  "#FFFFFF " + (2 * scaler) + "vw 0vh 0 0vh, " + 
  "#FFFFFF " + (0.5 * scaler) + "vw " + (-1.5 * scaler) + "vh 0 0vh, " +
  "#FFFFFF " + (1.5 * scaler) + "vw " + (-1 * scaler) + "vh 0 0vh"

  cloud.style.animation = "cloud_shift infinite linear " + duration + " " + delay

  element.appendChild(cloud);
}

const Cloud = () => {

  const clouds = 2
  window.addEventListener('load', function () { for(let i = 0; i < clouds; i++) CreateCloud() })
    
  return (
    <div id="cloud_holder">
    </div>
  );
}

export default Cloud;
