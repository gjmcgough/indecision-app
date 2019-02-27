import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
    >
      <h3>Your Destiny has been chosen:</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button
        onClick={props.handleClearOptions}
      >
        Let's do this!
      </button>
    </Modal>
);

export default OptionModal;
