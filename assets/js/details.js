const pokemonDetail = document.getElementById('ddd');

//Função para inserir os pokemons no HTML
function loadPokemon(id) {
    pokeApi.getPokemon(id).then((pokemon) => {
        const newHtmlDetail = convertPokemonToHtmlDetail(pokemon);
        pokemonDetail.innerHTML += newHtmlDetail;
    })
}


function returne() {
    window.location.href = `./index.html`
}

//Converte da lista para o formato html
function convertPokemonToHtmlDetail(pokemon) {
    return `<div class="${pokemon.type}"> <header>
    <button class="onlyIcon" onClick="returne()"></button>
    <h1>${pokemon.name}</h1>
    <h3>#00${pokemon.number}</h3>
</header>

<div class="card">
    <img src="${pokemon.photo}" alt="${pokemon.name}">
    <div class="type">
        ${pokemon.types.map((type) => `<p class="${type}">${type}</p>`).join('')}
    </div>
    <h2 class="about">About</h2>
    <div class="attributes">
        <div class="attribute">
            <div class="icon">
                <img src="assets/icons/weight.svg" alt="">
                <p>${pokemon.weight} kg</p>
            </div>
            <p>Weigth</p>
        </div>

        <div class="attribute">
            <div class="icon">
                <img src="assets/icons/straighten.svg" alt="">
                <p>${pokemon.height}</p>
            </div>
            <p>Height</p>
        </div>

        <div class="attribute">
            <div class="icon">
            ${pokemon.abilities.map((ability) => `<p>${ability}</p>`).join('')}

            </div>
            <p>Abilities</p>
        </div>
    </div>

    <h2>Base Stats</h2>
    <div class="stats">
        <div class="stat">
            <h3>HP</h3>
            <p>${pokemon.hp}</p>
            <div class="bar_stats">
                <div class="${pokemon.type}" style="width: ${pokemon.hp}px;"></div>
            </div>
        </div>

        <div class="stat">
            <h3>ATK</h3>
            <p>${pokemon.atk}</p>
            <div class="bar_stats">
                <div class="${pokemon.type}" style="width: ${pokemon.atk}px;"></div>
            </div>
        </div>

        <div class="stat">
            <h3>DEF</h3>
            <p>${pokemon.def}</p>
            <div class="bar_stats">
                <div class="${pokemon.type}" style="width: ${pokemon.def}px;"></div>
            </div>
        </div>

        <div class="stat">
            <h3>SATK</h3>
            <p>${pokemon.satk}</p>
            <div class="bar_stats">
                <div class="${pokemon.type}" style="width: ${pokemon.satk}px;"></div>
            </div>
        </div>

        <div class="stat">
            <h3>SDEF</h3>
            <p>${pokemon.sdef}</p>
            <div class="bar_stats">
                <div class="${pokemon.type}" style="width: ${pokemon.sdef}px;"></div>
            </div>
        </div>

        <div class="stat">
            <h3>SPD</h3>
            <p>${pokemon.spd}</p>
            <div class="bar_stats ">
                <div class="${pokemon.type}" style="width: ${pokemon.spd}px;"></div>
            </div>
        </div>
    </div>
</div>
</div`;
}


const pokemonID = new URLSearchParams(window.location.search).get("id")
loadPokemon(pokemonID)
