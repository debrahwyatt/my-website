import Sun from "./Sun";
import Moon from "./Moon";
import Hills from "./Hills";
import Stars from "./Stars";
import BackgroundFade from "./BackgroundFade";

const Scenery = () => {

  return (
    <div>
      <BackgroundFade/>
      <Hills/>
      <Stars/>
      <Sun/>
      <Moon/>
    </div>
  );
}

export default Scenery;
