const pokemonList = document.getElementById('pokemonList');
const load = document.getElementById('load');
const limit = 20;
let offset = 0;
const maxRecords= 649


function convertPokemonLi(pokemon) {
    return `
         <li class="pokemon ${pokemon.type}">
           <span class="number">#${pokemon.number}</span>
           <span class="name">${pokemon.name}</span>
   
           <div class=" detail">
             <ol class="types">
               ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>`).join('')}
             </ol>
   
             <img src="${pokemon.photo}"
               alt="${pokemon.name}">
           </div>
   
         </li>
    `
   }

 
function loadPokemonItens(offset, limit){   
  apiPoke.getPokemons(offset, limit)
  .then((pokemons=[])=> {
    pokemonList.innerHTML+= pokemons.map(convertPokemonLi).join('')
  })// printar a lista de pokemon
}

loadPokemonItens(offset, limit)

load.addEventListener('click',()=> {
  offset+=limit // incrementar o offset no limit

  const qtdRecord = offset + limit 

  if(qtdRecord >=  maxRecords){
    const newLimit= maxRecords- offset
    loadPokemonItens(offset,newLimit)

  load.parentElement.removeChild(load) // removendo botão

  } else{
  loadPokemonItens(offset, limit)}
})