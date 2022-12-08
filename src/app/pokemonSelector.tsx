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
    const [openTooltip, setOpenTooltip] = useState<boolean>(false);

    useEffect(() => {
        const getPokeData = async () => {
            if (pokemon == undefined) return
            const res = await fetch(pokemon?.url)
            const data = await res.json()
            setPokemonId(pokemon.id);
            setPokemonData(data)
        }
        getPokeData()
    }, [pokemon])

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
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
                                            alt={pokemonData.name}
                                            fill
                                        />
                                    </div>
                                </div>
                                <span>
                                        {captitalize(pokemonData?.name)}
                                    </span>
                            </div>
                        ) : "no pokemon"}
                    </div>
                    {pokemonData?.stats != undefined ? (
                        <div className={""}>
                            <div className={"flex flex-col"}>
                                <div className={"flex flex-col items-center justify-center gap-5"}>
                                    <div className={"flex flex-wrap gap-5 text-sm"}>
                                        {pokemonData.types.map((type => (
                                            <>
                                                <div key={type.slot} className={"flex flex-col text-center"}>
                                                    <div className={"h-12 w-12"}
                                                         onMouseEnter={() => setOpenTooltip(true)}
                                                         onMouseLeave={() => setOpenTooltip(false)}
                                                    >
                                                        <div
                                                            className={`absolute p-2 rounded bg-betterBlack -translate-y-10 ${openTooltip ? "block" : "hidden"}`}>
                                                            <p className={"text-white text-2xl"}>
                                                                {captitalize(type.type.name)}
                                                            </p>
                                                        </div>
                                                        <Image
                                                            src={`/types/Pokémon_${type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}_Type_Icon.svg`}
                                                            alt={"type"} width={50} height={50}

                                                        />
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