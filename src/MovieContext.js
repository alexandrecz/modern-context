import React, { useState, createContext, useEffect  } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data = await fetch('http://localhost:8000/movies')
        const movies = await data.json();
        setMovies(movies);
    }   

    useEffect(() => {
        fetchMovies();       
    },
    // eslint-disable-next-line
    []);   
    

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}

 