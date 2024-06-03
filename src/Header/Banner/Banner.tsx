import { Link } from 'react-router-dom';
import Magic from '../../Magic';
import './Banner.css';

interface bannerProps {
  bannerText: string
}

const Banner = (props: bannerProps) => {
  
  let bannerText = Magic();

  return (
    <div className='banner center'>
      <div className='scroll_container'>
          <Link to={'../view'} className="banner_link">
            <div id="scroll-text" className='banner-text banner_text center' >Debrah Wyatt</div>
            {/* <div id="scroll-text" className='banner-text banner_text center' >{bannerText}</div> */}
          </Link>
      </div>
    </div>
  );
}

export default Banner;
