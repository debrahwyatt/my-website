import './Content.css';
import { AboutContent } from './About';
import { ProjectContent } from './Projects';
import { VolunteerismContent } from './Volunteerism';
import { DocumentationContent } from './Documentation';
import { WorkExperienceContent } from './WorkExperience';

interface contentProp {
  url: string
}

const Content = (props: contentProp) => {
  return (
    <div id="panel_holder">
      <div id="panel">
        <div id="content_border"/>
        <div id="content_background">
          <div id="content">
            {props.url === "about" && AboutContent()}
            {props.url === "projects" && ProjectContent()}
            {props.url === "Volunteerism" && VolunteerismContent()}
            {props.url === "documentation" && DocumentationContent()}
            {props.url === "WorkExperience" && WorkExperienceContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
