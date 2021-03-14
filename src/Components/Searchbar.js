// import { debounce } from "lodash";
import React, { useContext } from "react";
import styled from "styled-components";
import { ReducerContext } from "../ReducerContext";

import searchIcon from "../assets/Search.svg";
import { actionTypes } from "../constants";
import { searchMovie } from "../utils/searchMovieByName";

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
  const { state, dispatch } = useContext(ReducerContext);

  const keyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch({ type: actionTypes.showMovies });
    } else if (e.keyCode === 27) {
      dispatch({ type: actionTypes.hideSimilar });
    }
  };

  return (
    <Container>
      <TextInput
        value={state.search}
        placeholder={"Search a Movie"}
        onChange={(e) => {
          searchMovie(e.target.value, dispatch);
          dispatch({ type: actionTypes.showSimilar, payload: e.target.value });
        }}
        onKeyDown={keyDown}
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
