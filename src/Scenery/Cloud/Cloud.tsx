import './Cloud.css';

const Cloud = () => {

  const cloud = document.createElement('div');
  cloud.setAttribute("class", "cloud")

  // Random between 100 and 1000
  let ran_y = Math.random()
  let ran_x = Math.random()

  cloud.style.top = ran_y * 1000 + "px"
  cloud.style.left = ran_x * 1000 + "px"

  const cloud_box = document.getElementById('cloud_box');
  cloud_box?.appendChild(cloud)
  console.log(cloud_box)

  return (
    <div id="blank"></div>
  );
}

export default Cloud;