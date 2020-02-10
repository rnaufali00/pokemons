import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import PokemonCard from '../../components/Card/PokemonCardDefault/PokemonCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContentLoader from "react-content-loader";



const PokemonList = () =>{
    const [pokemonData,setData] = useState([]);
    const userPokemon = useSelector(state=>state.pokemonName);
    
    const getPokemonData = async() =>{
        await fetch("https://pokeapi.co/api/v2/pokemon/").then(r => r.json()).then(data =>{
            let copyData = [...data.results];
            for(let [index,pokemon] of copyData.entries()){
                if(userPokemon.has(index+1))
                    pokemon.owned = userPokemon.get(index+1);
                else
                    pokemon.owned = 0;
                // pokemon.img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index+1}.png?raw=true`
                pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`

            }
            setData(pokemonData.concat(copyData));
        });
    }
    
    useEffect(() =>{
        getPokemonData();
    },[])
    

    const ListPokemon = () =>(
        <Row>
        {pokemonData.map((pokemon,index)=>{
            return (
                <Col key={`pokemon_${index}`} className="p-2" xs={6} sm={3} md={2}>
                   <Link style={{color:'initial'}} to={`/pokemon/${index+1}`}><PokemonCard  pokemon={pokemon}/></Link>
                </Col>
            )
        })}
        </Row>
    )
    
    const LoadingSkeleton = () =>{
        let card = []
        for(let i=0;i<3;i++){
            card.push(
                <Col key={`card_${i}`} xs={6} sm={3} md={2}>
                    <div style={{height:'180px'}}>
                        <ContentLoader>
                            <rect x="0" y="0" rx="5" ry="5" width="120" height="120" />
                            <rect x="0" y="125" rx="4" ry="4" width="120" height="40" />
                        </ContentLoader>                
                    </div>
                </Col>
             )
        }

        return card
    }

    if(pokemonData.length<1){
        return <div>
            <Row>
                <LoadingSkeleton/>
            </Row>
        </div>
    }
    else{
        return (
            <div>
                <ListPokemon></ListPokemon>
            </div>
        )
    }
}

export default PokemonList;