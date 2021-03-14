import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { actionTypes, mobile } from "../constants";
import { ReducerContext } from "../ReducerContext";
import { ThemeContext } from "../ThemeContext";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Container = styled.div`
  display: flex;
  background: #3c4043;
  width: 750px;
  color: #fff;
  font-size: 20px;

  ${mobile} {
    flex-direction: column;
    width: 350px;
  }
`;

const PosterImg = styled.img`
  height: 400px;
  width: 350px;

  ${mobile} {
    height: 200px
    width: 100px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 36px;
  gap: 16px;

  ${mobile} {
    width: 300px;
  }
`;

const MovieTitle = styled.h2`
  margin-top: 12px;
`;

const Text = styled.div``;

const Caption = styled.div`
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
`;

const Caption2 = styled(Caption)`
  font-size: 20px;
  color: #000;
`;

const SimilarButton = styled(Link)`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: #000;
  padding: 16px 24px;
  text-decoration: none;
  border-radius: 5px;
  color: #fff;
  width: 200px;
`;

const Movie = () => {
  const { theme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(ReducerContext);

  const { movie } = state;
  console.log(movie);

  if (movie.length === 0) {
    return (
      <PageWrapper>
        <Caption2>Type something to see search results</Caption2>
      </PageWrapper>
    );
  }

  const {
    Title,
    Year,
    imdbRating,
    Runtime,
    Genre,
    Director,
    Country,
    Plot,
    Poster,
  } = movie || {};

  return (
    <PageWrapper>
      <Container dark={theme}>
        <PosterImg src={Poster} />
        <Details>
          <MovieTitle>
            {Title} ({Year})
          </MovieTitle>
          <Text>IMDB Rating: {imdbRating}</Text>
          <Text>Runtime: {Runtime}</Text>
          <Text>Genre: {Genre}</Text>
          <Text>Director: {Director}</Text>
          <Text>Country: {Country}</Text>
          <Caption>{Plot}</Caption>
        </Details>
      </Container>
      <SimilarButton
        to={"/"}
        onClick={() => {
          dispatch({ type: actionTypes.showSimilar, payload: state.search });
        }}
      >
        View Similar
      </SimilarButton>
    </PageWrapper>
  );
};

export default Movie;
