import Buttons from './Buttons';
import './Home.css';

interface HomeProps {
  setBannerText: (text: string) => void;
}

const Home = (props: HomeProps) => {
  // const [bannerText, setBannerText] = useState("");

  return (
    <div className="box-holder center home">
      <Buttons title={"About"} url={"/about"} setBannerText={props.setBannerText}/>
      <Buttons title={"Projects"} url={"/projects"} setBannerText={props.setBannerText}/>
      <Buttons title={"Documentation"} url={"/documentation"} setBannerText={props.setBannerText}/>
    </div>
  )
}

export default Home
