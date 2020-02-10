export const cacthPokemon = (pokemon) =>{
    return{
        type:'CATCH',
        payload:pokemon
    };
};

export const releasePokemon = (pokemon,index) =>{
    return{
        type:'RELEASE',
        payload:{pokemon:pokemon,index:index}
    };
};