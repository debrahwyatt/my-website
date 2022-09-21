import sys_diag from './img/my-website_sys_diag.png'

export const DocumentationContent = () => {

  return (
    <div id="documentation">
      One of my more notable proficiencies is documentation, here is an example of how I use visual aids to help map and explain the system:
      <br/>
      <br/>
      <div className='center'>
        <img src={sys_diag} alt="system diagram" width="100%"/>
      </div>
    </div>
  )
}
