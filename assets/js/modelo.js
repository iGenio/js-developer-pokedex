//Cria uma classe (modelo) do pokemon definindo cada item que deve ter
class Pokemon {
    number;
    name;
    types = [];
    type;
    photo;
    weight;
    height;
    abilities;
    description;
    hp;
    atk;
    def;
    satk;
    sdef;
    spd;
}

//Converte do formato da API pro modelo
function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon() //Cria uma nova instancia da classe Pokemon
    pokemon.number = pokeDetail.id //Puxa o id da api e substitui no numéro 
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name) //Forma resumida de uma função
    pokemon.types = types
    pokemon.type = types[0]
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon 
}

function convertPokeApiDetailToPokemonDetail(pokeDetail) {
    const pokemon = new Pokemon() //Cria uma nova instancia da classe Pokemon
    pokemon.number = pokeDetail.id //Puxa o id da api e substitui no numéro 
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name) //Forma resumida de uma função
    pokemon.types = types
    pokemon.type = types[0]
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.weight = pokeDetail.weight
    pokemon.height = pokeDetail.height

    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name) //Forma resumida de uma função
    pokemon.abilities = abilities

    pokemon.hp = pokeDetail.stats[0].base_stat
    pokemon.atk = pokeDetail.stats[1].base_stat
    pokemon.def = pokeDetail.stats[2].base_stat
    pokemon.satk = pokeDetail.stats[3].base_stat
    pokemon.sdef = pokeDetail.stats[4].base_stat
    pokemon.spd = pokeDetail.stats[5].base_stat

    return pokemon 
}

