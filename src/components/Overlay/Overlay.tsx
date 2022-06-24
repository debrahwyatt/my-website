import { Modal } from "@fluentui/react";
import './Overlay.css';

interface OverlayProps {
    isOpen: boolean;
    hideModal: () => void;
};

const Overlay = (props: OverlayProps) => {
    
    const onClose = () => {
        props.hideModal();
    }

    return (
        <Modal className="modal" isOpen={props.isOpen}>
          <div className="centered blast-door">
            <button onClick={onClose}>Enter</button>
          </div>
        </Modal>
    );
}

export default Overlay;