'use client'
export const actionType = {
  SET_MODAL_SHOW: "SET_MODAL_SHOW",
  SET_MOVIE_ITEM: "SET_MOVIE_ITEM",
  SET_IS_LOADING: "SET_IS_LOADING",
  SET_MOVIE_STREAM: "SET_MOVIE_STREAM",
  SET_SEARCH_ITEM: "SET_SEARCH_ITEM",
  SET_MOBILE_MODEL: "SET_MOBILE_MODE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_MODAL_SHOW:
      return {
        ...state,
        modalShow: action.modalShow,
      };
    case actionType.SET_MOVIE_ITEM:
      return {
        ...state,
        movieItem: action.movieItem,
      };
    case actionType.SET_IS_LOADING:
        return {
          ...state,
          isLoading: action.isLoading,
        };
    case actionType.SET_MOVIE_STREAM:
          return {
            ...state,
            movieStream: action.movieStream,
          };
    case actionType.SET_SEARCH_ITEM:
            return {
              ...state,
              searchItem: action.searchItem,
            };
  
    
    default:
      return state;
  }
};

export default reducer;
