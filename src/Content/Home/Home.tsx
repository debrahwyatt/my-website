import './Home.css';
import Buttons from './Buttons';

interface HomeProps {
  setBannerText: (text: string) => void;
}

const Home = (props: HomeProps) => {

  return (
    <div className="box-holder">
      <Buttons title={"About"} url={"/about"} setBannerText={props.setBannerText}/>
      <Buttons title={"Contact"} url={"/contact"} setBannerText={props.setBannerText}/>
      <Buttons title={"Projects"} url={"/projects"} setBannerText={props.setBannerText}/>
      <Buttons title={"Education"} url={"/education"} setBannerText={props.setBannerText}/>
      <Buttons title={"Volunteerism"} url={"/volunteerism"} setBannerText={props.setBannerText}/>
      <Buttons title={"Certification"} url={"/certification"} setBannerText={props.setBannerText}/>
      <Buttons title={"Documentation"} url={"/documentation"} setBannerText={props.setBannerText}/>
      <Buttons title={"Work Experience"} url={"/workexperience"} setBannerText={props.setBannerText}/>
    </div>
  )
}

export default Home
