import Content from '../Content';
import './Docs.css';
import sys_diag from './img/my-website_sys_diag.png'

const Docs = () => {

  let p2 = () => {
    return "<img src={sys_diag} alt=\"system diagram\" width=\"75%\"/> HEY"
    }

  return (
    // <div id="content2">
    //   <Content content={p2()}/>
    //   <div className="center">
    //     <img src={sys_diag} alt="system diagram" width="75%"/>
    //   </div>    
    // </div>
    <div id="panel_holder">
      <div id="panel">
        <div id="content_border"/>
        <div id="content_background">
          <div id="content">
            TEST
            <div className='center'>
              <img src={sys_diag} alt="system diagram" width="75%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Docs
