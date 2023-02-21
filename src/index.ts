import PokemonSpecies from './schemas/PokemonSpecie'
import { getPokemonSpecies } from './services/getProkemons'

(async () => {
  let shouldLoop: boolean = true
  let URL: string = 'https://pokeapi.co/api/v2/pokemon-species'
  while(shouldLoop) {
    const data = await getPokemonSpecies(URL)
    shouldLoop = data?.next ? true : false
    data?.next ? URL = data.next : URL
    console.log(data)
  }
})()
