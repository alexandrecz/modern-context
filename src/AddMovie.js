import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
import style from 'styled-components';

const Form = style.form`
    @media(max-width:767px){
        
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 18vh;
    width: 80%;  
    margin: auto;
    border-bottom: 2px solid slategrey; 
`;

const Input = style.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;    
    width: 300px;
    outline: none;
`;


const AddMovie = () => {
    
    // eslint-disable-next-line
    const [movies, setMovies, addMovie] = useContext(MovieContext);
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    
    const updateName = e => {
        setName(e.target.value);
    };

    const updatePrice = e => {
        setPrice(e.target.value);
    };

    const submitMovie = e => {
        e.preventDefault();
        const newMovie = {name: name, price: price};              
        addMovie(newMovie);
    };
    

    return (
        <Form onSubmit={submitMovie}>
            <Input 
                type="text"
                autocomplete="off"
                placeholder="Type movie name here"
                name="name"
                value={name} 
                onChange={updateName}/>
            
            <Input 
                type="number"
                autocomplete="off"
                name="price"
                placeholder="Type movie price here"
                value={price}
                onChange={updatePrice}/>
            <button className="App-button">Submit</button>
        </Form>

    );
}

export default AddMovie;