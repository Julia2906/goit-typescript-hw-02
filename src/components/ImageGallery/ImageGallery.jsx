import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id} onClick={() => openModal(item)}>
          <ImageCard image={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
