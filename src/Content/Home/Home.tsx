import { useState } from 'react';
import Buttons from './Buttons';
import './Home.css';

interface ButtonProps {
  setBannerText: (text: string) => void
}

const Home = (props: ButtonProps) => {
  const [bannerText, setBannerText] = useState("");

  return (
    <div className="box-holder center home">
      <Buttons title={"About"} url={"/about"} setBannerText={setBannerText}/>
      <Buttons title={"Projects"} url={"/projects"} setBannerText={setBannerText}/>
      <Buttons title={"Documentation"} url={"/documentation"} setBannerText={setBannerText}/>
    </div>
  )
}

export default Home
