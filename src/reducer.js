import { actionTypes } from "./constants";

export const initialState = {
  search: '',
  movies: [],
  showMovies: false,
  showSimilar: false,
  error: '',
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
          showMovies: state.movies.length > 0 && state.search !== '',
        };
    case actionTypes.showSimilar:
      console.log(state, 'action')
      return {
        ...state,
        search: action.payload,
        showSimilar: state.movies.length > 0 && state.search !== '',
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
