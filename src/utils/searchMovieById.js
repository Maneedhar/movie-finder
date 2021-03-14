import axios from "axios";
import { actionTypes, API_KEY } from "../constants";

export const searchMovie = async (id, dispatch) => {
  const res = await axios.get(
    `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );
  // if (res.data) {
    dispatch({
      type: actionTypes.showMovie,
      payload: res.data,
    });
  // }
};