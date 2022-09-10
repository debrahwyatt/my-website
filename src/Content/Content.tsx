import { AboutContent } from './About';
import { DocumentationContent } from './Documentation';
import { ProjectContent } from './Projects';

import './Content.css';


interface contentProp {
  url: string
}

const Content = (props: contentProp) => {

  return (
    // if Scenery load scenery, else:
    <div id="panel_holder">
      <div id="panel">
        <div id="content_border"/>
        <div id="content_background">
          <div id="content">
            {props.url === "about" && AboutContent()}
            {props.url === "projects" && ProjectContent()}
            {props.url === "documentation" && DocumentationContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
