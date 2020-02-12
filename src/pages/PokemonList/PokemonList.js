import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import PokemonCard from '../../components/Card/PokemonCardDefault/PokemonCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './pokemonList.scss';
import LogoPokemon from '../../assets/International_Pokémon_logo.png';
import SkeletonCard from '../../components/Skeleton/SkeletonCard';
import animationData from '../../lotties/loading.json'
import Lottie from 'react-lottie';




const PokemonList = () =>{
    const [pokemonData,setData] = useState([]);
    const [loadData,setLoadData] = useState(true);
    const userPokemon = useSelector(state=>state.pokemonName);
    const userDevice = useSelector(state=>state.device);

    // FOR LOTTIE IMG
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    
    // FECTH DATA
    const getPokemonData = async() =>{
        let offset = pokemonData.length
        await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}`).then(r => r.json()).then(data =>{
            let copyData = [...data.results];
            for(let [index,pokemon] of copyData.entries()){
                if(userPokemon.has(index+1+offset))
                    pokemon.owned = userPokemon.get(index+1+offset);
                else
                    pokemon.owned = 0;
                
                pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1+offset}.png`
                
            }
            let newPokemonData = pokemonData.concat(copyData);
            setData(newPokemonData);
            setLoadData(false)
        });
    }
    
    // RUN AFTER RENDER COMPONENT (ONE TIME ONLY) 
    useEffect(() =>{
        if(loadData)
            getPokemonData();
    },[loadData])
    
    // RUN TO FECTH DATA WHEN 80% BOTTOM
    const handleScroll =()=> {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight *0.8){
            setLoadData(true) 
        } 
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    const ListPokemon = () =>(
        <Row>
        {pokemonData.map((pokemon,index)=>{
            return (
                <Col key={`pokemon_${index}`} className="p-2" xs={6} sm={3} md={3} lg={2}>
                   <Link style={{color:'initial'}} to={`/pokemon/${index+1}`}><PokemonCard  pokemon={pokemon}/></Link>
                </Col>
            )
        })}
        </Row>
    )
    
    const LoadingSkeleton = () =>{
        let card = []
        let max = userDevice === 'mobile'?2:6
        for(let i=0;i<max;i++){
            card.push(
                <Col key={`card_${i}`} xs={6} sm={3} md={2}>
                    <SkeletonCard/>   
                </Col>
             )
        }

        return card
    }
    const ContentList = () =>{
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

    return(
        <div>
            <div className="header-content">
                <img src={LogoPokemon} alt=""/>
                <h3 className="mt-3">"gotta catch 'em all"</h3>
            </div>
            <ContentList/>
            {loadData && (
                <div className="text-center">
                    <Lottie options={defaultOptions} height={125} width={125} />
                    <h4 style={{marginTop:'-25px'}}>Please wait...</h4>
                </div>
            )}
        </div>
    )
}

export default PokemonList;