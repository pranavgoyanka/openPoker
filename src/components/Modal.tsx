interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='modalOverlay flex font' onClick={onClose}>
      <div className='modalContent w-2' onClick={(e) => e.stopPropagation()}>
        <h2 className="font-bold text-2xl mb-1">Rules</h2>
        <p className="text-justify">Open Poker is a high-stakes and speedy variant of traditional poker where all cards are dealt face-up, eliminating the element of hidden information. Once the deal is complete, the player with the best hand wins immediately.</p>
        <button className="mt-2" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


export default Modal;
