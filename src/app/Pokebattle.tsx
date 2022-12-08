"use client"

import PokemonSelector from "./pokemonSelector";
import {IPokemon} from "../utils/@types/pokemon.t";
import {useState} from "react";
import axios from "axios";
import Winner from "../components/Winner";
import captitalize from "../utils/captitalize";

export interface Prediction {
    pokeOne: number;
    pokeTwo: number;
    actualWinner: number;
    winner: number;
    accuracy: number;
}


const Pokebattle = ({pokemons}: { pokemons: IPokemon[] }) => {
    const [pokeOne, setPokeOne] = useState<number>(0);
    const [pokeTwo, setPokeTwo] = useState<number>(0);
    const [winner, setWinner] = useState<Prediction | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const filterPokemon = (toFilter: number) => {
        const filtered = pokemons.filter((poke) => poke.id == toFilter);
        return filtered[0];
    }

    const fight = async (first: number, second: number) => {
        if (first == 0 || second == 0) return;
        setIsLoading(true);
        const req = await axios.get<Prediction>(`/api/battle/${first}/${second}`);
        //const req = await fetch(`/api/hello`);
        const data = await req.data;
        setWinner(data)
        setIsLoading(false);
    }

    return (
        <>
            <div className={"flex justify-between px-14 items-center mt-16"}>
                <PokemonSelector pokemons={pokemons} setPokemonId={setPokeOne}/>
                <div className={"flex flex-col"}>
                    <button
                        className={"w-40 h-9 bg-betterBlue text-white rounded"}
                        onClick={() => fight(pokeOne, pokeTwo)}
                        disabled={isLoading}
                    >
                        Fight
                    </button>
                </div>
                <PokemonSelector pokemons={pokemons} setPokemonId={setPokeTwo}/>
            </div>
            {winner ? (
                <>
                    <div className={"flex justify-center pt-5 text-center"}>
                        <Winner winner={winner.winner}/>
                    </div>
                    <div className={"flex flex-col justify-center items-center text-"}>
                        <p>
                            Actual winner: {captitalize(filterPokemon(winner.actualWinner).name)}
                        </p>
                        <p>
                            Prediction: {captitalize(filterPokemon(winner.winner).name)}
                        </p>
                        <p>
                            Accuracy: {(winner.accuracy * 100).toFixed(2)}%
                        </p>
                    </div>
                </>
            ) : null}
        </>
    )
}

export default Pokebattle