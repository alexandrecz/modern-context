import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';
import logo from './logo.svg';
import './App.css';

const Nav = () => {
    // eslint-disable-next-line
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>React Managment State</h1>
            <h3>List of Movies: {movies.length}</h3>            
        </nav>
    )
}

export default Nav;