import Buttons from './Buttons';
import './Home.css';


const Home = () => {

  return (
    <div className="box-holder center">
      <Buttons title={"AI"} url={"/ai"}/>
      <Buttons title={"UML"} url={"/uml"}/>
      <Buttons title={"Stats"} url={"/stats"}/>
      <Buttons title={"Docs"} url={"/docs"}/>
      <Buttons title={"Projects"} url={"/projects"}/>
    </div>
  )
}

export default Home
