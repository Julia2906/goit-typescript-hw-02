import Modal from 'react-modal';
import React from 'react';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');

const ImageModal = ({ onClose, image }) => {
  const isOpen = Boolean(image);

  return (
    <Modal className={css.modal} isOpen={isOpen} onRequestClose={onClose}>
      {image && (
        <>
          <button className={css.button} onClick={onClose}>
            x
          </button>
          <img
            className={css.img}
            src={image.urls.regular}
            alt={image.description}
          />
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
