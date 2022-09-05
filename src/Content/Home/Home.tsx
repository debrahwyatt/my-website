import Buttons from './Buttons';
import './Home.css';


const Home = () => {

  return (
    <div className="box-holder center home">
      <Buttons title={"About"} url={"/about"}/>
      <Buttons title={"Projects"} url={"/projects"}/>
      <Buttons title={"Documentation"} url={"/documentation"}/>
    </div>
  )
}

export default Home
