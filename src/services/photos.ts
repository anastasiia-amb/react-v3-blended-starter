import axios from "axios";

const API_KEY = "563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74";
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

export interface FetchPhotosResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: Photo;
}

export const getPhotos = async (query: string): Promise<FetchPhotosResponse> => {
  const { data } = await axios.get<FetchPhotosResponse>('/search', {
    params: {
      query;
    }
  })

  return data.photos;
};
