import axios from "axios";
import { actionTypes, API_KEY, API_URL } from "../constants";

export const searchMovie = async (searchValue, dispatch) => {
  const { data } = await axios.get(
    `${API_URL}?s=${searchValue}&apikey=${API_KEY}`
  );

  if (data.Response === "True") {
    const movies = data.Search?.filter((result) => result.Type === "movie");
    dispatch({
      type: actionTypes.success,
      payload: movies,
    });
  } else {
    dispatch({
      type: actionTypes.failed,
      error: data.Error,
    });
  }
};
