import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "./constants";
import { ReducerContext } from "./ReducerContext";

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const MovieList = styled.ul`
  display: grid;
  height: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  list-style: none;
  margin: 0;
  padding: 0;

  img {
    height: 450px;
    width: 300px;
  }
  ${mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => {
  // const { movies, showMovies } = props;
  const { state } = useContext(ReducerContext);

  const { movies, showMovies } = state;

  console.log(state, "home");
  return (
    <PageWrapper>
      {showMovies ? (
        <MovieList>
          {movies?.map((movie) => {
            return (
              <Link to={`/${movie.Title}`} key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
              </Link>
            );
          })}
        </MovieList>
      ) : null}
    </PageWrapper>
  );
};

export default Home;
