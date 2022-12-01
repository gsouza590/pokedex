
function convertPokemonTypesToLi(pokemonsTypes) {
  return pokemonsTypes.map((typeSlot)=>`<li class="type">${typeSlot.type.name}</li> `
  )
  
}


function convertPokemonLi(pokemon) {
 return `
      <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>

        <div class=" detail">
          <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join('')}
          </ol>
          <img src="${pokemon.sprites.other.dream_world.front_default}"
            alt="${pokemon.name}">
        </div>
      </li>
 `
}

const pokemonList = document.getElementById('pokemonList');


apiPoke.getPokemons()
  .then((pokemons=[])=> {
    pokemonList.innerHTML+=  pokemons.map(convertPokemonLi).join('')
  })// printar a lista de pokemon
 
