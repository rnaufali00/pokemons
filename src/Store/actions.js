export const cacthPokemon = (pokemon) =>{
    console.log(pokemon)
    return{
        type:'CATCH',
        payload:pokemon
    };
};

export const releasePokemon = (pokemon,index) =>{
    console.log(pokemon);
    return{
        type:'RELEASE',
        payload:{pokemon:pokemon,index:index}
    };
};