import './Stars.css';

const Stars = () => {

  window.addEventListener('load', function () {

    let element = document.getElementById("stars") as HTMLDivElement;

    for(let i = 0; i < 511; i++){

      let star = document.createElement("div")
      star.className ="star"

      star.style.top = Math.random() * 99.9 + "%"
      star.style.left = Math.random() * 99.9 + "%"
      
      let size = Math.random() * 0.1 + "vh"
      star.style.width = star.style.height = size

      star.style.animation = "flicker infinite 2s " + Math.random() * 2 + "s"

      element?.appendChild(star);
    }
  })

  return (
    <div id='stars'/>
  );
}

export default Stars;