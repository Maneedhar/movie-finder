import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReducerContext } from "../ReducerContext";
import { ThemeContext } from "../ThemeContext";
import { Searchbar } from "./Searchbar";

import logo from "../assets/sova.png";
import ToggleButton from "./ToggleButton";
import { searchMovie } from "../utils/searchMovieById";

const NavContainer = styled.div`
  justify-content: center;
  padding: 0 1rem;
  position: relative;
  background: ${(props) => (props.dark ? "#000" : "#fff")};
`;

const NavWrapper = styled.div`
  display: flex;
  height: 52px;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLeft = styled.div`
  display: flex;
  flex-grow: 0.5;
  flex-basis: 0;
`;

const NavbarCenter = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
`;

const NavbarRight = styled(NavbarLeft)`
  justify-content: flex-end;
`;

const SimilarList = styled.div`
  display: flex;
  height: 300px;
  overflow: auto;
  margin: 0 27%;
  flex-direction: column;
`;

const SimilarSearches = styled(Link)`
  list-style: none;
  text-decoration: none;
  background: #d2e3fc;
  margin-bottom: 4px;
  padding: 8px;
`;

const Logo = styled.img`
  height: 36px;
`;

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state, dispatch } = useContext(ReducerContext);
  const { movies, showSimilar } = state;
  console.log(state);
  return (
    <>
      <NavContainer dark={theme}>
        <NavWrapper>
          <NavbarLeft>
            <Logo src={logo} alt="sovo health" />
          </NavbarLeft>
          <NavbarCenter>
            <Searchbar />
          </NavbarCenter>
          <NavbarRight>
            {/* <button onClick={toggleTheme}>Change Theme</button> */}
            <ToggleButton toggleTheme={toggleTheme} />
          </NavbarRight>
        </NavWrapper>
      </NavContainer>
      {showSimilar && (
        <SimilarList dark={theme}>
          {movies?.map((movie) => {
            const { Title, imdbID: id } = movie;
            return (
              <SimilarSearches
                to={`/${Title}`}
                onClick={() => {
                  searchMovie(id, dispatch);
                }}
                key={id}
              >
                {Title}
              </SimilarSearches>
            );
          })}
        </SimilarList>
      )}
    </>
  );
};

export default Navbar;
