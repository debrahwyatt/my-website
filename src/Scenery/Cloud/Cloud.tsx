import './Cloud.css';


const CreateCloud = () => {

  const height = 30 + Math.random() * 50
  const size = (Math.random() * 1.5 + 5) + "vh"  
  const duration = (Math.random() * 30 + 70) + "s"
  const delay = (Math.random() * -100) + "s"

  const cloud = document.createElement("div")
  const element = document.getElementById("cloud_holder") as HTMLDivElement;

  cloud.className ="cloud"  
  cloud.style.left = -11 + "vw"  
  cloud.style.top = height + "%"
  cloud.style.width = cloud.style.height = size
  cloud.style.animation = "cloud_shift infinite linear " + duration + " " + delay

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
