import React from 'react';
import { Card } from 'react-bootstrap';
import './pokemonCard.scss';

const PokemonCard = (props) =>(
    <Card className="card-custom">
        <div className="card-owned">Owned: {props.pokemon.owned}</div>
        <Card.Img className="card-img" variant="top" src={props.pokemon.img?props.pokemon.img:''} />
        <Card.Body className="card-body">
            <Card.Title>{props.pokemon.name}</Card.Title>
        </Card.Body>
    </Card>
)

export default PokemonCard;