import { Modal } from "@fluentui/react";
import './Overlay.css';

interface OverlayProps {
    isOpen: boolean;
    hideModal: () => void;
};

const Overlay = (props: OverlayProps) => {
    
    const onClose = () => {
      const left_door = document.getElementById("left-door") as HTMLDivElement
      left_door.style.animationPlayState = 'running';

      const right_door = document.getElementById("right-door") as HTMLDivElement
      right_door.style.animationPlayState = 'running';
      
      const blast_btn = document.getElementById("blast-btn") as HTMLDivElement
      blast_btn.style.display = "none"
      
      props.hideModal();
    }

    return (
        <div>
          <button id="blast-btn" onClick={onClose}>Enter</button>
          <div id="left-door" className="centered blast-door blast-door-left"/>
          <div id="right-door" className="centered blast-door blast-door-right"/>
        </div>
    );
}

export default Overlay;