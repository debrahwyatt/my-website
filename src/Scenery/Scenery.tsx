import Sun from "./Sun";
import Moon from "./Moon";
import Hills from "./Hills";
import Stars from "./Stars";
import BackgroundFade from "./BackgroundFade";
import './Scenery.css';

const Scenery = () => {

  return (
    <div className="scenery">
      <Stars/>
      <Moon/>
      <BackgroundFade/>
      <Sun/>
      <Hills/>
    </div> 
  ); 
}

export default Scenery;
