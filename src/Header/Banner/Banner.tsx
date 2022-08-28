import './Banner.css';

const Banner = () => {

  const banner_text = "Welcome!"

  return (
    <div className='banner center'>
      <div className='scroll_container'>
        <div id="scroll-text" className='banner-text banner_text'>{banner_text}</div>
      </div>
    </div>
  );
}

export default Banner;