import React, { useEffect } from 'react';


const PokemonList = () =>{
    
    useEffect(() =>{
        const getPokemonData = async() =>{
            let data  = await fetch("https://pokeapi.co/api/v2/pokemon/");
            let response = await data.json();
            console.log(response);
        }
        getPokemonData();
    },[])
    
    return (
        <div>
            Ini List
        </div>
    )
}

export default PokemonList;