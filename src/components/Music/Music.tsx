import codeMonkey from './code-monkey.mp3';

const Music = () => {
  return (  
    <div>
      <audio autoPlay loop id="playAudio">
        <source src={codeMonkey} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Music
