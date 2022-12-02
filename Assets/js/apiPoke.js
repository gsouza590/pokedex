
const apiPoke ={}

function convertPokeApiDetailToModel(pokeDetail){
  const pokemon= new Pokemon()
  pokemon.number= pokeDetail.order
  pokemon.name= pokeDetail.name

  const types= pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

apiPoke.getPokemonDetail=(pokemon)=>{
  return fetch(pokemon.url)
  .then((response=> response.json()))
  .then(convertPokeApiDetailToModel)
  }
  // um novo fetch para url do pokemon e convertando para um json


apiPoke.getPokemons = (offset=0, limit = 5)=> {
const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

 return fetch(url)
.then( (response)=>response.json()) // converter para json
.then((jsonBody)=> jsonBody.results)// results sao nossa lista de pokemon
.then((pokemons)=> pokemons.map(apiPoke.getPokemonDetail)) // lista de requisicoes dos detalhes
.then((detailRequests)=>Promise.all(detailRequests))// esperamos todas as requisicoes terminarem
.then((pokemonsDetails)=> pokemonsDetails)
}