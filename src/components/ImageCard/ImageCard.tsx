import css from './ImageCard.module.css';

import {Image} from "../ImageGallery/ImageGallery"

type Props = {
  image: Image;
};

export default function ImageCard({
  image: {
    alt_description,
    urls: { small },
  },
}: Props) {
  return (
    <>
      <img className={css.img} src={small} alt={alt_description} />
    </>
  );
}