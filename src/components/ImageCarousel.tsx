"use client"

import {IPokemon} from "../utils/@types/pokemon.t";
import Image from "next/image";
import {useEffect, useState} from "react";

interface IResult {
    name: string,
    url: string
}

const ImageCarousel = () => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    useEffect(() => {
        const getSomePokemons = async () => {
            const url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
            const response = await fetch(url)
            const data = await response.json()

            const pokemonData = data.results.map((data: IResult, index: number) => ({
                id: index + 1,
                name: data.name,
                url: data.url,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            }));
            setPokemons(pokemonData)
        }
        getSomePokemons();
    })
    return(
        <>
            <div id={"slider"} className={"w-screen h-30 whitespace-nowrap pokemon-scroll"}>
                {pokemons.map((pokemon, index) =>
                    <div key={index} className={"inline-block p-2 pointer-events-none border-b border-black"}>
                        <div className={"text-center"}>
                            <div className={"bg-darkerWhite rounded-2xl"}>
                                <Image
                                    className={"h-16 w-auto"}
                                    priority
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={120}/>
                            </div>
                            <span>{pokemon.name}</span>
                        </div>
                    </div>
                )}
                {pokemons.map((pokemon, index) =>
                    <div key={index} className={"inline-block p-2 pointer-events-none border-b border-black"}>
                        <div className={"text-center"}>
                            <div className={"bg-darkerWhite rounded-2xl"}>
                                <Image
                                    className={"h-16 w-auto"}
                                    priority
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png`}
                                    alt={pokemon.name}
                                    width={100}
                                    height={120}/>
                            </div>
                            <span>{pokemon.name}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ImageCarousel