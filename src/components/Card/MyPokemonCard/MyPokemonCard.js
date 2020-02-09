import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './myPokemonCard.scss';

const MyPokemonCard = (props) =>{
    
    return(
    <Card className="card-custom">
        <div className="card-owned">Owned: {props.pokemon.nickname}</div>
        <Card.Img className="card-img" variant="top" src={props.pokemon.img?props.pokemon.img:props.pokemon.sprites.front_default} />
        <Card.Body className="card-body">
            <Card.Title>{props.pokemon.name}</Card.Title>
            <div className="mt-2">
                <Button variant="danger" onClick={()=>props.handleRemove()} className="release-btn">Release</Button>
            </div>
        </Card.Body>
    </Card>
)}

export default MyPokemonCard;