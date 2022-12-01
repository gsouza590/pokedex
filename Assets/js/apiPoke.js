
const apiPoke ={}


apiPoke.getPokemonDetail=(pokemon)=>{
  return fetch(pokemon.url)
  .then((response=> response.json()))
}// um novo fetch para url do pokemon e convertando para um json


apiPoke.getPokemons = (offset=0, limit = 5)=> {
const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

 return fetch(url)
.then( (response)=>response.json()) // converter para json
.then((jsonBody)=> jsonBody.results)// results sao nossa lista de pokemon
.then((pokemons)=> pokemons.map(apiPoke.getPokemonDetail)) // lista de requisicoes dos detalhes
.then((detailRequests)=>Promise.all(detailRequests))// esperamos todas as requisicoes terminarem
.then((pokemonsDetails)=> pokemonsDetails)
}