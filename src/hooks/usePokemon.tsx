import { useEffect, useState } from "react"
import { PokemonInfo } from "../interfaces/pokemonInterfaces";
import { pokemonApi } from "../api/PokemonApi";

export const usePokemon = ( id: String) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonInfo>({} as PokemonInfo)
    
    const loadPokemon = async () => {
        const resp = await pokemonApi.get<PokemonInfo>(`https://pokeapi.co/api/v2/pokemon/${ id }`)
        setPokemon( resp.data );
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemon();
    }, [])
    

    return {
        isLoading,
        pokemon
    }
}