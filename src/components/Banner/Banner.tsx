import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {

    return (
      <div className='banner center'>
        <Link to='/' className='center banner-text'><h1>Debrah's Website</h1></Link>
      </div>
    );
}

export default Banner;