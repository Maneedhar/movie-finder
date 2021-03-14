import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "./constants";
import { ReducerContext } from "./ReducerContext";
import { searchMovie } from "./utils/searchMovieById";

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MovieList = styled.ul`
  display: grid;
  // height: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  list-style: none;
  margin: 0;
  padding: 0;

  img {
    height: 450px;
    width: 300px;
  }
  ${mobile} {
    grid-template-columns: repeat(1, 1fr);
    img {
      height: 200px
      width: 100px;
    }
  }
`;

const Movie = styled(Link)`
  img {
    border-radius: 5px 5px 0 0;
  }
  text-decoration: none;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  background: #202124;
  color: #f5f5f5;
  border-radius: 0 0 5px 5px;
  margin-top: -4px;
  flex-wrap: wrap;
`;

const Caption = styled.div`
  color: #000;
  font-size: 24px;
`;

const Home = () => {
  const { state, dispatch } = useContext(ReducerContext);

  const { movies, showMovies } = state;

  return (
    <PageWrapper>
      {showMovies ? (
        <MovieList>
          {movies?.map((movie) => {
            const { Title, imdbID: id, Year: year } = movie;
            return (
              <Movie
                to={`/${Title}`}
                key={id}
                onClick={() => {
                  searchMovie(id, dispatch);
                }}
              >
                <img src={movie.Poster} alt={Title} />
                <TitleContainer>
                  {Title} ({year})
                </TitleContainer>
              </Movie>
            );
          })}
        </MovieList>
      ) : (
        <Caption>Type something to see search results</Caption>
      )}
    </PageWrapper>
  );
};

export default Home;
