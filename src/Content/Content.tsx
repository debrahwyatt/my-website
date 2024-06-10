import './Content.css';
import { AboutContent } from './About';
import { ContactContent } from './Contact';
import { ProjectContent } from './Projects';
import { EducationContent } from './Education';
import { VolunteerismContent } from './Volunteerism';
import { CertificationContent } from './Certification';
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
            {props.url === "contact" && ContactContent()}
            {props.url === "projects" && ProjectContent()}
            {props.url === "education" && EducationContent()}
            {props.url === "volunteerism" && VolunteerismContent()}
            {props.url === "certification" && CertificationContent()}
            {props.url === "documentation" && DocumentationContent()}
            {props.url === "WorkExperience" && WorkExperienceContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
