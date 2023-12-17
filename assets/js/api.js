const pokeApi = {} //Cria um objeto chamado pokeApi

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url) //Retorna uma promise
    .then (function (response) { //Uma função como parametro o response
        console.log(response)
        return response.json() //Transforma o response em json pegando o Body da requisição
    }) 
    
    .then (function (jsonBody) { //Função que ta pegando o body (o response.json)
        console.log(jsonBody.results)
        return jsonBody.results //Retira somente o results do body
    })

    .then (function (pokemons) { 
        return pokemons.map(function (pokemon) { //Mapea a lista de pokemons
            return fetch(pokemon.url).then (function (response) { //Retorna uma promisse dentro da url de cada pokemon
                console.log(response)
                return response.json() //Transforma a resposta em um json
            }).then (convertPokeApiDetailToPokemon) //Converte os dados da api em json para um modelo predefinido
        })
    })

    .then (function (detailRequest) {
        return Promise.all(detailRequest) //Só apresenta a promisse depois de rodar todas as vezes
    })

    .then (function (pokemonDetails) {
        console.log(pokemonDetails)
        return pokemonDetails //Apresenta a lista de resposta de detalhe de cada pokemon
    })

}


pokeApi.getPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch(url) //Retorna uma promise
    .then (function (response) { //Uma função como parametro o response
        console.log(response)
        return response.json() //Transforma o response em json pegando o Body da requisição
    }) .then (convertPokeApiDetailToPokemonDetail)

    .then (function (pokemonDetails) {
        console.log(pokemonDetails)
        return pokemonDetails //Apresenta a lista de resposta de detalhe de cada pokemon
    })
}

