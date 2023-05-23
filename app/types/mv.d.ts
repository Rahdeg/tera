type MovieItem = {
  id: number;
  name: string;
  // Add more properties as needed
};

type StoreState = {
  movie: {
    movieItems: MovieItem[];
    isLoading: boolean;
  };
};
