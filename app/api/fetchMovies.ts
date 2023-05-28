const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface IParams {
  listingId?: string;
}

export const searchMovies = async (searchItem: string) => {
  const URL = `https://www.omdbapi.com/?s=${searchItem}&apikey=${API_KEY}`;
  const response = await fetch(URL);
  const finalData = await response.json();
  console.log("url", searchItem);
  return finalData.Search;
};

export const fetchMovies = async () => {
  const URL = `https://www.omdbapi.com/?s=Mortal&apikey=${API_KEY}`;
  const response = await fetch(URL);
  const finalData = await response.json();
  return finalData.Search;
};

export const fetchAMovie = async (listingId: string) => {
  const URL = `https://www.omdbapi.com/?i=${listingId}&apikey=${API_KEY}`;
  const response = await fetch(URL);
  const finalData = await response.json();
  return finalData;
};
