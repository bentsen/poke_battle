"use client"
import {IPokemon} from "../utils/@types/pokemon.t";
import {useEffect, useState} from "react";
import {Prediction} from "../app/Pokebattle";
import axios from "axios";
import captitalize from "../utils/captitalize";

const getPokemon = async (pokemon: number) => {
    const url = `https://pokeapi.co/api/v2/${pokemon}`;
    const response = await fetch(url)
    return await response.json()
}

const Winner = ({winner}: { winner: number }) => {
    const [pokemon, setPokemon] = useState<IPokemon>();
    useEffect(() => {
        const getPokemon = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${winner}`;
            const response = await axios.get<IPokemon>(url)
            const data = response.data;
            setPokemon(data)
        }
        getPokemon()
    }, [winner])

    return (
        <>
            {pokemon ? (
                <div className={"flex flex-col"}>
                    <h2 className={"text-2xl"}>
                        Winner is
                    </h2>
                    <h2 className={"text-4xl"}>
                        ✨{captitalize(pokemon.name)}✨
                    </h2>
                </div>
            ): null}
        </>
    )
}

export default Winner