import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './pokemonCard.scss'; 

const PokemonCard = (props) =>{
    const BadgeLabel = () =>{
        if(props.pokemon.nickname)
            return (<label>{props.pokemon.nickname}</label>)
        else
            return  (<label>Owned: {props.pokemon.owned}</label>)
    }

    return(
    <Card className="card-custom">
        <div className="card-owned">
          <BadgeLabel/>
        </div>
        <Card.Img className="card-img" variant="top"  src={props.pokemon.img?props.pokemon.img:props.pokemon.sprites.front_default}  />
        <Card.Body className="card-body">
            <Card.Title>{props.pokemon.name}</Card.Title>
            {props.pokemon.nickname && 
                <div className="mt-2">
                    <Button variant="danger" onClick={()=>props.handleRemove()} className="release-btn">Release</Button>
                </div>
            }
        </Card.Body>
        <div className="bottom-box"></div>
    </Card>
)}

export default PokemonCard;