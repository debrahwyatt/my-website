import './Sailboat.css';
import SailboatImage from '../../../workshop/Sailboat.png'; // Import the PNG image

const Sailboat = () => {

    return (
      <div className="sailboat_path">
        <div className='sailboat_box'>
          <div className='sailboat_box2'>
            <img src={SailboatImage} alt="Sailboat" className="sailboat" />
          </div>
        </div>
      </div>
    );
}

export default Sailboat;