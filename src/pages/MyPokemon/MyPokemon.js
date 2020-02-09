import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import MyPokemonCard from '../../components/Card/MyPokemonCard/MyPokemonCard';
import { releasePokemon } from '../../Store/actions';
import Lottie from 'react-lottie'
import animationData from '../../lotties/empty.json'



const MyPokemon = () =>{
    const ownedPokemon = useSelector(state=> state.pokemon);
    const dispacth= useDispatch();

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    const ListPokemon = () =>(
        <Row>
            {ownedPokemon.map((pokemon,index)=>{
                return (
                    <Col key={`pokemon_${index}`} className="p-2" xs={6} sm={4} md={3}>
                        <MyPokemonCard handleRemove={()=>dispacth(releasePokemon(pokemon,index))}  pokemon={pokemon}/>
                    </Col>
                )
            })}
        </Row>
    )
    
    if(ownedPokemon.length < 1){
        return (
            <div className="text-center">
                <Lottie options={defaultOptions}
                            height={125}
                            width={125}
                            />
                <div style={{color:'grey'}}>
                    <h4>Sorry, you don't have pokemon....</h4>
                    <h2 className="mt-3">"gotta catch 'em all"</h2>
                </div>
            </div>
        )
    }else{
        return(
            <div>        
                <ListPokemon/>
            </div>
        )

    }
}

export default MyPokemon;