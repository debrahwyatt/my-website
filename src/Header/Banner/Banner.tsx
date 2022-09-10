import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {

  const banner_text = "Welcome!"

  return (
    <div className='banner center'>
      <div className='scroll_container'>
          <Link to={'../view'} className="banner_link">
            <div id="scroll-text" className='banner-text banner_text center' >{banner_text}</div>
          </Link>
      </div>
    </div>
  );
}

export default Banner;
