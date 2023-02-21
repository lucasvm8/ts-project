import axios from "axios";

export async function getPokemonSpecies(URL: string) {
  const response = await axios.get(URL);
  return response.data
}
