import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
import style from 'styled-components';

const Form = style.form`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 18vh;
    width: 80%;  
    margin: auto;
    border-bottom: 2px solid slategrey; 
`;

const AddMovie = () => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    // eslint-disable-next-line
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = e => {
        setName(e.target.value);
    };
    const updatePrice = e => {
        setPrice(e.target.value);
    };

    const addMovie = e => {
        e.preventDefault();
        setMovies(previousMovies => [...previousMovies, {name: name, price: price, id:new Date().getTime}]);
    };


    return (
        <Form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button className="App-button">Submit</button>
        </Form>

    );
}

export default AddMovie;