'use client'

import Searchbar from "./searchbar";
import Image from "next/image";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {IPokemon} from "../utils/@types/pokemon.t";
import {IPokemonData} from "../utils/@types/pokemonData.t";
import captitalize from "../utils/captitalize";

const PokemonSelector = ({
                             pokemons,
                             setPokemonId
                         }: { pokemons: IPokemon[], setPokemonId: Dispatch<SetStateAction<number>> }) => {
    const [pokemon, setPokemon] = useState<IPokemon | undefined>()
    const [pokemonData, setPokemonData] = useState<IPokemonData>()

    useEffect(() => {
        const getPokeData = async () => {
            if (pokemon == undefined) return
            const res = await fetch(pokemon?.url)
            const data = await res.json()
            setPokemonId(pokemon.id);
            setPokemonData(data)
        }
        getPokeData()
    }, [pokemon, setPokemonId])

    return (
        <>
            <div className={"w-96 h-[550px] bg-darkerWhite border border-hoverColor rounded relative"}>
                <div className={"flex flex-col"}>
                    <div>
                        <Searchbar pokemons={pokemons} setPokemon={setPokemon}/>
                    </div>
                    <div className={"h-auto text-center font-bold text-xl"}>
                        {pokemonData ? (
                            <div>
                                <div className={"h-56 relative flex items-center justify-center pt-10"}>
                                    <div className={"bg-hoverColor h-full w-2/3 rounded-lg"}>
                                        <Image
                                            className={"p-2"}
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
                                            alt={pokemonData.name}
                                            fill
                                            style={{
                                                imageRendering: "pixelated",
                                            }}
                                        />
                                    </div>
                                </div>
                                <h2 className={"text-3xl font-bold"}>
                                    {captitalize(pokemonData?.name)}
                                </h2>
                            </div>
                        ) : "Please select a Pokémon"}
                    </div>
                    {pokemonData?.stats != undefined ? (
                        <div>
                            <div className={"flex flex-col"}>
                                <div className={"flex flex-col items-center justify-center gap-5"}>
                                    <div className={"flex flex-wrap gap-5 text-sm"}>
                                        {pokemonData.types.map((type => (
                                            <>
                                                <div key={type.slot} className={"flex flex-col text-center"}>
                                                    <div className={"h-12"}>
                                                        <Image
                                                            src={`/types/Pokémon_${type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}_Type_Icon.svg`}
                                                            alt={"type"} width={50} height={50}
                                                        />
                                                        <div
                                                            className={`px-2 rounded bg-betterBlack`}>
                                                            <p className={"text-white text-md"}>
                                                                {captitalize(type.type.name)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        )))}
                                    </div>
                                </div>
                                <div>
                                    <div className={"flex flex-col text-xs"}>
                                        {pokemonData.stats.map((e) => (
                                            <div className={"border-b border-black flex items-center p-2"}
                                                 key={e.stat.name}>
                                                <span className={"uppercase"}>{e.stat.name}:</span>
                                                <span className={"pl-1"}>{e.base_stat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ""}
                </div>
            </div>
        </>
    )
}

export default PokemonSelector