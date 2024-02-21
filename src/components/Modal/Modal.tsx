import './Modal.css';

interface ModalProps {
  setModalEffectClass: (value: string) => void
}

const Modal = ({ setModalEffectClass }: ModalProps) => {
  return(
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-effect">
            <div className="modal-backgrounds">
                <div className="modal-background"></div>
                <div className="modal-background modal-background2"></div>
                <div className="modal-background modal-background3"></div>
                <div className="modal-background modal-background4"></div>
                <div className="modal-background modal-background5"></div>
                <div className="modal-background modal-background6"></div>
            </div>
        </div>
        <div className="modal-content">
            <div className="modal-content-div">
                <h1>Content Here</h1>
                <button className="modal-close-btn" onClick={() => setModalEffectClass('')}>Close</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
