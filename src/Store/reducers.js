
const initState = {
    pokemon :[],
    pokemonName: new Map()
}

const userPokemonReducer =(state=initState,action) =>{
    let copyState;
    switch(action.type){
        case 'CATCH':
            copyState = {...state};
            if(copyState.pokemonName.has(action.payload.id)){
                copyState.pokemonName.set(action.payload.id,copyState.pokemonName.get(action.payload.id)+1);
            }else{
                copyState.pokemonName.set(action.payload.id,1);
            }
            copyState.pokemon.push(action.payload);

            return {...state,pokemon:[...copyState.pokemon],pokemonName:new Map(copyState.pokemonName)}

        case 'RELEASE':
            copyState = {...state};
            copyState.pokemon.splice(action.payload.index,1);
            copyState.pokemonName.set(action.payload.pokemon.id,copyState.pokemonName.get(action.payload.pokemon.id)-1);

            return {...state,pokemon:[...copyState.pokemon],pokemonName:new Map(copyState.pokemonName)}

        default:
            return state
    }
}

export default userPokemonReducer;