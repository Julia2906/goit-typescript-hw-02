import axios from 'axios';

const API_KEY = 'sQIAw_PjrocTEAEhNduKVDQuhpihpkrKilxS6kdPVJ4';
const BASE_URL = "https://api.unsplash.com";

export type UnsplashPhoto = {
  id: string;
  description: string;
  likes: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
};

export type UnsplashResponse = {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
};

type Params = {
  query: string;
  client_id: string;
  orientation: string;
  per_page: number;
  page: number;
};

export const fetchPhotos = async (
  query: string,
  page: number = 1
): Promise<UnsplashResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: 20,
        client_id: API_KEY,
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
