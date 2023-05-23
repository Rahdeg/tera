const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchMovies = async () => {
  const URL = `https://www.omdbapi.com/?s=don&apikey=${API_KEY}`;
  const response = await fetch(URL);
  const finalData = await response.json();
  console.log("data", finalData.Search);
};
