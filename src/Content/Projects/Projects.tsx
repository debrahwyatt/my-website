import Content from '../Content';
import { ProjectContent } from './ProjectContent';
import './Projects.css';

const Projects = () => {
  let p1 = 'My public repository of projects can be found on https://github.com/debrahwyatt, but here are a few of my current projects: </br> </br>' +
            '<b>Drug Checking Program:</b> The best drug checking service Victoria has to offer. <br>' + 
            'This ' 
  let p2 = ProjectContent()
  return (
    <Content content={p1}/>
  )
}

export default Projects
