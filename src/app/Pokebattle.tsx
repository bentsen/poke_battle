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

    const fightDisabled = pokeOne == 0 || pokeTwo == 0;

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
            <div className={"flex flex-col md:flex-row justify-between items-center px-0 md:px-20 lg:px-40 flex-shrink-0"}>
                <PokemonSelector pokemons={pokemons} setPokemonId={setPokeOne}/>
                <div className={"flex flex-col justify-center items-center p-3 md:p-5"}>
                    <button
                        className={"w-40 h-9 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded disabled:bg-indigo-800 disabled:cursor-not-allowed"}
                        onClick={() => fight(pokeOne, pokeTwo)}
                        disabled={isLoading || fightDisabled}
                    >
                        {isLoading ? "Fighting..." : "Fight!"}
                    </button>
                    {fightDisabled ? (
                        <p className={"text-sm text-center font-bold"}>You need to select 2 Pokémon</p>
                    ): null}
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