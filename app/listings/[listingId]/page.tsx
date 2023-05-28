import MoviePage from "@/app/components/MoviePage";
import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import { fetchAMovie } from "@/app/api/fetchMovies";
import { useEffect } from "react";

interface IParams {
  listingId: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const { listingId } = params;

  return <MoviePage listingId={listingId} />;
};

export default ListingPage;
