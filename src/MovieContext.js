import React, { useState, createContext  } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: "Man of steel",
            price: "$10",
            id: 1
        },
        {
            name: "Batman vs Superman",
            price: "$10",
            id: 2
        },
        {
            name: "Justice League",
            price: "$10",
            id: 3
        },
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}

 