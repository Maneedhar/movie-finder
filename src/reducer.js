import { actionTypes } from "./constants";

export const initialState = {
  search: '',
  movies: [],
  showMovies: false,
  showSimilar: false,
  error: '',
  movie: [],
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.success:
      return {
        ...state,
        movies: action.payload,
      };
    case actionTypes.showMovies:
        return {
          ...state,
          showMovies: true,
          showSimilar: false,
        };
    case actionTypes.showSimilar:
      return {
        ...state,
        search: action.payload,
        showSimilar: true,
        showMovies: false,
      }
    case actionTypes.hideSimilar:
      return {
        ...state,
        showSimilar: false
      }
    case actionTypes.showMovie:
      return {
        ...state,
        showSimilar: false,
        movie: action.payload,
      }
    case actionTypes.failed:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
