import { useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { useState } from 'react';
import {fetchFotoWithTopic, UnsplashPhoto} from './FetchPhotos/FetchPhotos';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import toast from 'react-hot-toast';


const App: React.FC = () => {
  const [fotos, setFoto] = useState<UnsplashPhoto[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectFoto, setSelectFoto] = useState<UnsplashPhoto | null>(null);

  function openModal(photo: any) {
    setSelectFoto(photo);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectFoto(null);
  }

  useEffect(() => {
    if (!query) return;

    async function fetchFoto() {
      try {
        setError(false);
        setLoading(true);

        const data = await fetchFotoWithTopic(query, page);
        setFoto((prev) => [...prev, ...data.results]);
      } catch {
        setError(true);
        toast.error("This didn't work.");
      } finally {
        setLoading(false);
      }
    }
    fetchFoto();
  }, [query, page]);

  const handleSearch = (topic: string) => {
    setPage(1);
    setQuery(topic);
    setFoto([]);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={fotos} onClick={openModal} />
      )}
      {loading && <Loader loading={loading} />}

      {fotos.length !== 0 && (
        <LoadMoreBtn onClick={() => setPage(() => page + 1)} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        photo={selectFoto}
      />
    </>
  );
};

export default App;
