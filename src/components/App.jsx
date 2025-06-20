import { useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { useState } from 'react';
import { fetchPhotos } from './FetchPhotos/FetchPhotos';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = query => {
    setSearchTerm(query);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(false);
        const images = await fetchPhotos(searchTerm, page);
        if (images.length === 0) {
          toast.error('No images found!');
          return;
        }
        setPhotos(prevImages => {
          return page === 1 ? images : [...prevImages, ...images];
        });
      } catch {
        setError(true);
        toast.error('Error! Please, reload page!');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  const loadMorePhotos = () => {
    setPage(page + 1);
  };

  function openModal(image) {
    setSelectedImage(image);
  }

  function closeModal() {
    setSelectedImage(null);
  }

  return (
    <>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery items={photos} openModal={openModal} />
      {loading && <Loader />}
      {photos.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={loadMorePhotos} />
      )}
      <ImageModal onClose={closeModal} image={selectedImage} />
    </>
  );
};
export default App;
