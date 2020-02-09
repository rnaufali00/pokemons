import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Tabs, Tab, Button, Modal, Form, Toast } from 'react-bootstrap';
import './PokemonDetail.scss';
import { useDispatch } from 'react-redux';
import { cacthPokemon } from '../../Store/actions';

const PokemonDetail = () =>{
    
    const {id} = useParams();
    const [pokemon,setPokemon] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [notifFailedShow, setNotifFailedShow] = useState(false);
    const [notifSuccessShow, setNotifSuccessShow] = useState(true);
    const [formFlag, setFormFlag] = useState(true);
    const dispacth = useDispatch();


    const handleCatch = () =>{
        setFormFlag(true);
        let chance = Math.random();
        if(chance < 0.5){
            setNotifFailedShow(true);
        }else{
            setNotifFailedShow(false);
            setModalShow(true);
        }
    }

    const savePokemon = () =>{
        setFormFlag(true)
        let nickname = document.getElementById('nicknamePokemon').value;
        if(nickname.length < 1){
            setFormFlag(false);
        }else{
            let selectedPokemon = {...pokemon};
            selectedPokemon.nickname = nickname;
            dispacth(cacthPokemon(selectedPokemon));
            setModalShow(false);
            setNotifSuccessShow(true);
        }
    }

    const ModalSuccess = (props) =>{
        return(
            <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Form id="formNickname">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Gotcha!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <Form.Group>
                                <Form.Label>Set Nickname</Form.Label>
                                <Form.Control type="text" id="nicknamePokemon" name="nickname" placeholder="Enter nickname"  isInvalid={!formFlag}/>
                                <Form.Control.Feedback type="invalid" style={{textAlign:'left'}}>
                                        Must be filled!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="text-right">
                                <Button variant="danger" className="btn-pokemon" onClick={()=>savePokemon()}>Save it</Button>
                            </div>
                    </Modal.Body>
                </Form>
            </Modal>
        )
    }

    
    const NotifFail = () =>(
        <div className="toast-container">
            <Toast className="toast-fail" onClose={() => setNotifFailedShow(false)} show={notifFailedShow} delay={3000} animation={true} autohide>
                <Toast.Header>
                    <strong className="mr-auto">Oppsss!</strong>
                </Toast.Header>
                <Toast.Body>Sorry, fail to catch pokemon...</Toast.Body>
            </Toast>
        </div>
    )

    const NotifSuccess = () =>(
        <div className="toast-container">
            <Toast className="toast-success" onClose={() => setNotifSuccessShow(false)} show={notifSuccessShow}  animation={true} >
                <Toast.Header>
                    <strong className="mr-auto">Save to MyPokemon</strong>
                </Toast.Header>
                <Toast.Body>Congrats, success to catch pokemon...</Toast.Body>
            </Toast>
        </div>
    )
    
    useEffect(()=>{
        const getPokemonDetail = async(id) =>{
            await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(r=>r.json())
            .then(response =>{
                console.log(response);
                setPokemon(response);
            }).catch(e =>{
                console.log(e)
            })
        }
        getPokemonDetail(id);
    },[id])

    if(pokemon.sprites){
        return (
            <div className="text-center">
                <div>
                    <img className="pokemon-detail-img" src={pokemon.sprites.front_default}/>
                </div>
                <div className="pokemon-detai-desc">
                    <div className="catch-pokemon-container">
                        <Button variant="danger" className="cacth-btn" onClick={()=>handleCatch()}> 
                            <img className="pokeball-img" alt="" src="/icons8-open-pokeball.png"/>
                            Catch Pokemon
                        </Button>
                    </div>
                    <h3 className="mt-4" style={{textTransform:'capitalize'}}>{pokemon.name}</h3>
                    <div className="pokemon-info-etc">
                        Weight: {pokemon.weight} <br/>
                        Height: {pokemon.height} <br/>
                        Base Exp: {pokemon.base_experience}
                    </div>
                    <div className="d-flex type-list">
                        {pokemon.types.map((type,index)=>{
                            return(
                                   <div key={`type_${index}`} className="type-label"> {type.type.name} </div> 
                            )   
                        })}
                    </div>
                   
                    <Tabs defaultActiveKey="moves">
                        <Tab eventKey="moves" title="Moves">
                            <Row className="my-2 moves-container">
                                {pokemon.moves.map((move,index)=>{
                                    return(
                                        <Col key={`move_${index}`} className="text-center move-card py-2" xs={6}>
                                            <div className="move-label">{move.move.name}</div>
                                        </Col> 
                                    )   
                                })}
                            </Row>
                        </Tab>
                    </Tabs>
                </div>
                <ModalSuccess
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <NotifFail/>
                <NotifSuccess/>
            </div>
        )
    }else{
        return<label>Loading...</label>
    }
}

export default PokemonDetail;