import { Link } from 'react-router-dom';
import './Banner.css';

interface bannerProps {
  bannerText: string
}

const Banner = (props: bannerProps) => {
  
  return (
    <div className='banner'>
      <div className='scroll_container'>
          <Link to={'../view'} className="banner_link">
            <div id="scroll-text" className='banner-text center' >{props.bannerText}</div>
          </Link>
      </div>
    </div>
  );
}

export default Banner;
