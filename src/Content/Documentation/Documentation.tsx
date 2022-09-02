import './Documentation.css';
import sys_diag from './img/my-website_sys_diag.png'

const Documentation = () => {

  return (
    <div id="panel_holder">
      <div id="panel">
        <div id="content_border"/>
        <div id="content_background">
          <div id="content">
            TEST
            <div className='center'>
              <img src={sys_diag} alt="system diagram" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation
