import './Cloud.css';

const CreateCloud = () => {

  const top = 30 + Math.random() * 50
  const scaler = Math.random() * 1 + 1
  const delay = (Math.random() * -100) + "s"
  const duration = (Math.random() * 30 + 70) + "s"

  const cloud = document.createElement("div")
  const element = document.getElementById("cloud_holder") as HTMLDivElement;

  cloud.className ="cloud3"  
  cloud.style.zIndex = "100"
  cloud.style.top = top + "%"
  cloud.style.borderRadius = "50%"
  cloud.style.position = "absolute"
  cloud.style.backgroundColor = "#FFFFFF"
  cloud.style.width = cloud.style.height = 2 * scaler + "vw"
  cloud.style.animation = "cloud_shift infinite linear " + duration + " " + delay
  cloud.style.boxShadow = 
  "#FFFFFF " + (1 * scaler) + "vw 0 0 0, " +
  "#FFFFFF " + (2 * scaler) + "vw 0 0 0, " + 
  "#FFFFFF " + (0.5 * scaler) + "vw " + (-1.5 * scaler) + "vh 0 0, " +
  "#FFFFFF " + (1.5 * scaler) + "vw " + (-1 * scaler) + "vh 0 0"  

  element.appendChild(cloud);
}

const Cloud = () => {

  const clouds = 2
  window.addEventListener('load', function () { for(let i = 0; i < clouds; i++) CreateCloud() })
    
  return (
    <div id="cloud_holder"/>
  );
}

export default Cloud;
