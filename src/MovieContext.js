import React, { useState, createContext, useEffect  } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const data = await fetch('http://localhost:8000/movies')
        const movies = await data.json();
        setMovies(movies);
    }   

    const addMovie = async movie => {
        const body = JSON.stringify(movie);
        const response = await fetch('http://localhost:8000/movies', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
    
        const mov = await response.json();
        
        setMovies(previousMovies => [...previousMovies, mov]);         
    }

    useEffect(() => {
        fetchMovies();       
    },
    // eslint-disable-next-line
    []);   
    

    return (
        <MovieContext.Provider value={[movies, setMovies, addMovie]}>
            {props.children}
        </MovieContext.Provider>

    );
}

 