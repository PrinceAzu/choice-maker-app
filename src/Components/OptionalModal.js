import React from 'react';
import Modal from 'react-modal';


const OptionalModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedChoice}
      contentLabel="Selected Choice"
      ariaHideApp={false}
      onRequestClose={props.handleHideModal}
      closeTimeoutMS={0}
      className="modal"
    >
    <h3 className="modal__title">Selected Choice</h3>
    <h4 className="modal__body">{props.selectedChoice}</h4>
    <button className="btn" onClick={props.handleHideModal}>Okay</button>
    </Modal>
  )
}

export default OptionalModal;