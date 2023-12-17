let offset = 0;
let limit = 10;
const maxRecords = 151;

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')


//Função para inserir os pokemons no HTML
function loadPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('');
        pokemonList.innerHTML += newHtml;
    })
}

function openDetail(id) {
    window.location.href = `./detail.html?id=${id}`
}


//Inicia a função de carregar os pokemons
loadPokemons(offset, limit)

//Converte da lista para o formato html
function convertPokemonToHtml(pokemon) {
    return `<button id=${pokemon.number} class="card_container ${pokemon.type}" onclick="openDetail(${pokemon.number})")">
    <img src="${pokemon.photo}" alt="">
    <div class="containerInfo">
        <h3 class="id">#00${pokemon.number}</h3>
        <h2 class="name">${pokemon.name}</h2>
    </div>
    <div class="type">
        ${pokemon.types.map((type) => `<p class="${type}">${type}</p>`).join('')}
    </div>
</button>`;
}



loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemons(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemons(offset, limit)
    }
})