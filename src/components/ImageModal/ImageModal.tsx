import Modal from 'react-modal';
import { UnsplashPhoto } from '../FetchPhotos/FetchPhotos';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');

type Props = {
  isOpen: boolean;
  onClose: () => void;
  photo: UnsplashPhoto | null;
};

export default function ImageModal({ isOpen, onClose, photo }: Props) {
  if (!photo) return;
  return (
    <>
      <Modal
        className={css.modal}
        overlayClassName={css.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}>
        <img className={css.img} src={photo.urls.regular} alt={photo.description} />
         <button className={css.button} onClick={onClose}>
            x
          </button>
      </Modal>
    </>
  );
}