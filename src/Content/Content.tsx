import './Content.css';

interface contentProp {
  content: string
}

const Content = (props: contentProp) => {

  return (
    <div id="panel_holder">
      <div id="panel">
        <div id="content_border"/>
        <div id="content_background">
          <div id="content">
            {props.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
