
import cloneDeep from 'lodash/cloneDeep';

const userAgent = navigator.userAgent;
const setDevice = () =>{
    if(/android|iPhone|iPod/i.test(userAgent)){ //mobile device
        return 'mobile'
    }else { 
        return 'desktop'
    }
}

const initState = {
    pokemon :[],
    pokemonName: new Map(),
    device : setDevice()
}

console.log(initState);

const userPokemonReducer =(state=initState,action) =>{
    let copyState;
    switch(action.type){
        case 'CATCH':
            copyState = cloneDeep(state);
    
            if(copyState.pokemonName.has(action.payload.id)){
                copyState.pokemonName.set(action.payload.id,copyState.pokemonName.get(action.payload.id)+1);
            }else{
                copyState.pokemonName.set(action.payload.id,1);
            }
            copyState.pokemon.push(action.payload);

            return {...state,pokemon:copyState.pokemon,pokemonName:copyState.pokemonName}

        case 'RELEASE':
            copyState = cloneDeep(state);;
            copyState.pokemon.splice(action.payload.index,1);
            copyState.pokemonName.set(action.payload.pokemon.id,copyState.pokemonName.get(action.payload.pokemon.id)-1);

            return {...state,pokemon:copyState.pokemon,pokemonName:copyState.pokemonName}

        default:
            return state
    }
}

export default userPokemonReducer;