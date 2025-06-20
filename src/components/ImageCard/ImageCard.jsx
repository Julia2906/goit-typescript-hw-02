import css from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  const { urls, description } = image;

  return (
    <div className="css.div">
      <img className={css.img} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
