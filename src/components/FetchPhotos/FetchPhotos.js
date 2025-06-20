import axios from 'axios';

const ACCESS_KEY = 'sQIAw_PjrocTEAEhNduKVDQuhpihpkrKilxS6kdPVJ4';

export const fetchPhotos = async (query, currentPage) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        client_id: 'sQIAw_PjrocTEAEhNduKVDQuhpihpkrKilxS6kdPVJ4',
        query: query,
        per_page: 12,
        page: currentPage,
      },
    });

    return response.data.results;
  } catch (error) {
    toast.error('Error! Please, reload page!');
    return [];
  }
};
