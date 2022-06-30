import './Sun.css';
import sun from './sun.png'

const Sun = () => {

    return (
      <div className="sun">
        <img src={sun} alt="the sun" width="75" height="75" className='sun-img'></img>
      </div>
    );
}

export default Sun;