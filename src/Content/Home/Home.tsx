import './Home.css';
import Buttons from './Buttons';

interface HomeProps {
  setBannerText: (text: string) => void;
}

const Home = (props: HomeProps) => {

  return (
    <div className="box-holder center home">
      <Buttons title={"About"} url={"/about"} setBannerText={props.setBannerText}/>
      <Buttons title={"Projects"} url={"/projects"} setBannerText={props.setBannerText}/>
      <Buttons title={"Volunteerism"} url={"/volunteerism"} setBannerText={props.setBannerText}/>
      <Buttons title={"Documentation"} url={"/documentation"} setBannerText={props.setBannerText}/>
      <Buttons title={"Work Experience"} url={"/workexperience"} setBannerText={props.setBannerText}/>
    </div>
  )
}

export default Home
