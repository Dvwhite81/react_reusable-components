interface OpenModalBtnProps {
  setModalEffectClass: (value: string) => void
}

const OpenModalBtn = ({ setModalEffectClass }: OpenModalBtnProps) => {
  return (
    <div className="modal-wrapper">
      <button
        className="effect-button"
        onClick={() => setModalEffectClass('active-modal')}
      >
        <span className="effect-button-text">
          Open
        </span>
        <div className="effect-button-backgrounds" />
      </button>
    </div>
  );
}

export default OpenModalBtn;
