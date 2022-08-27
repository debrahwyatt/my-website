import { Link } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import './Home.css';

const Home = () => {



  return (
    <div className="box-holder center">
      <Buttons title={"AI"} url={"/ai"}/>
      <Buttons title={"UML"} url={"/uml"}/>
      <Buttons title={"Stats"} url={"/stats"}/>
      <Buttons title={"Docs"} url={"/docs"}/>
      <Buttons title={"Projects"} url={"/projects"}/>
      {/* <div className="box">
        <Link to='/uml' onMouseOver={hover_sound} className='link floating_box center'><h2>UML</h2></Link>
      </div>
      <div className="box">
        <Link to='/stats' onMouseOver={hover_sound} className='link floating_box center'><h2>Stats</h2></Link> 
      </div>
      <div className="box">
        <Link to='/docs' onMouseOver={hover_sound} className='link floating_box center'><h2>Docs</h2></Link>
      </div> */}
    </div>
  )
}

export default Home
