import pic1 from './pic1.jpg'

export const AboutContent = () => {
  return (
    <div>
      <div>
        <img src={pic1} alt="system diagram" className='pic1' />
      </div>
      <div>
        <p>
          My name is Debrah Wyatt, I'm a software engineering graduate from the University of Victoria with a specialization in artificial intelligence. While my experience is mostly front-end web development using React, Typescript, HTML, and JavaScript; I'm also proficient in back-end technology with a specialization in artificial intelligence. <br/>
          <br/>
          I'm a full stack web developer with experience in LAMP (Linux, Apache, MySQL, and PHP), and I've hosted various websites from my home server. My personal projects either contain some entrepreneurial element or exist to enhance my personal repertoire of skills.<br/>
          <br/>
          Overall, I take my work seriously when it comes to implementation but I'm all for having fun while that happens. Looking forward to bridging connections, growing projects, and meeting new people.
        </p>
      </div>
    </div>
  )
}
