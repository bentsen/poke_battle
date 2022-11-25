'use client'

import Searchbar from "./searchbar";
import Image from "next/image";
import {useState} from "react";
import {IPokemon} from "../utils/@types/pokemon.t";

const PokemonSelector = ({pokemons} : {pokemons: IPokemon[]}) => {
    const [pokemon, setPokemon] = useState<IPokemon | undefined>()

    return(
        <>
            <div className={"w-96 h-[500px] bg-darkerWhite border border-hoverColor rounded"}>
                <div className={"flex flex-col"}>
                    <div>
                        <Searchbar pokemons={pokemons} setPokemon={setPokemon}/>
                    </div>
                        <div className={"h-52 text-center font-bold text-xl"}>
                            {pokemon ? (
                                <div>
                                    <div className={"h-56 relative flex items-center justify-center pt-10"}>
                                        <div className={"bg-hoverColor h-full w-2/3 rounded-lg"}>
                                            <Image
                                                className={"p-2"}
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id!}.svg`}
                                                alt={pokemon.name}
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <span>
                                        {pokemon?.name}
                                    </span>
                                </div>
                            ) : "no pokemon"}
                        </div>
                        {pokemon?.stats != undefined ? (
                            <div className={"pt-14 p-5"}>
                                <div className={"flex flex-col"}>
                                    <div>
                                        <div className={"font-bold"}>
                                            Stats:
                                        </div>
                                        <div className={"flex flex-wrap gap-2 text-sm"}>
                                            {pokemon?.stats.map((e) => (
                                                <div key={e.stat.name}>
                                                    <span className={"uppercase"}>{e.stat.name}:</span>
                                                    <span className={"pl-1"}>{e.base_stat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={"flex flex-row items-center bg-blue-400 gap-5"}>
                                        <div className={"font-bold"}>
                                            Types:
                                        </div>
                                        <div className={"flex flex-wrap gap-5 text-sm"}>
                                            <div className={"flex flex-col text-center"}>
                                                <Image src={"/types/Pokémon_Bug_Type_Icon.svg"} alt={"type"} width={50} height={50}/>
                                                <span>Bug</span>
                                            </div>
                                            <div className={"flex flex-col text-center"}>
                                                <Image src={"/types/Pokémon_Bug_Type_Icon.svg"} alt={"type"} width={50} height={50}/>
                                                <span>Bug</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ): ""}
                </div>
            </div>
        </>
    )
}

export default PokemonSelector