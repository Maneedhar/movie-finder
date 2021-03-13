import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReducerContext } from "../ReducerContext";
import { ThemeContext } from "../ThemeContext";
import { Searchbar } from "./Searchbar";

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

const SimilarSearches = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Navbar = ({ searchMovie }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { state } = useContext(ReducerContext);
  const { movies, showSimilar } = state;
  return (
    <NavContainer dark={theme}>
      <NavWrapper>
        <NavbarLeft>
          <img src={""} alt="sovo health" />
        </NavbarLeft>
        <NavbarCenter>
          <Searchbar searchMovie={searchMovie} />
        </NavbarCenter>
        <NavbarRight>
          <button onClick={toggleTheme}>Change Theme</button>
        </NavbarRight>
      </NavWrapper>
      {showSimilar &&
        movies?.map((movie) => {
          const { Title, imdbID: id } = movie;
          return (
            <Link to={`/Title`}>
              <SimilarSearches key={id}>{Title}</SimilarSearches>
            </Link>
          );
        })}
    </NavContainer>
  );
};

export default Navbar;
