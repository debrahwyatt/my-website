import Sun from "./Sun";
import Moon from "./Moon";
import Hills from "./Hills";
import Stars from "./Stars";
import Cloud from "./Cloud";
import Mountains from "./Mountains";
import BackgroundFade from "./BackgroundFade";

import './Scenery.css';

const Scenery = () => {

  return (
    <div className="scenery">
      <Stars/>
      <Moon/>
      <BackgroundFade/>
      <Sun/>
      <Mountains/>
      <Cloud/>
      <Hills/>
    </div> 
  ); 
}

export default Scenery;
