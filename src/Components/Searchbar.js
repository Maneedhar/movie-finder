import { debounce } from "lodash";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ReducerContext } from "../ReducerContext";

import searchIcon from "../assets/Search.svg";
import { actionTypes, API_KEY, API_URL } from "../constants";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  border: 1px solid;
  border-radius: 20px;
  background: #fff;
`;

const TextInput = styled.input`
  flex: 1;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  cursor: pointer;
`;

export const Searchbar = () => {
  const [search, setSearch] = useState("");
  const { dispatch } = useContext(ReducerContext);

  const searchMovie = async (searchValue) => {
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

  // const debounced = debounce(setSearch, 100);

  return (
    <Container>
      <TextInput
        value={search}
        placeholder={"Search a Movie"}
        onChange={(e) => {
          setSearch(e.target.value);
          searchMovie(search);
          dispatch({ type: actionTypes.showSimilar, payload: search });
        }}
      />
      <Icon
        src={searchIcon}
        onClick={() => {
          dispatch({ type: actionTypes.showMovies });
        }}
      />
    </Container>
  );
};
