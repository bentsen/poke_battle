import Image from "next/image";
import PokemonSelector from "./pokemonSelector";
import {IPokemon} from "../utils/@types/pokemon.t";
import {useState} from "react";
import Pokebattle from "./Pokebattle";
import ImageCarousel from "../components/ImageCarousel";
import captitalize from "../utils/captitalize";

interface IResult {
    name: string,
    url: string
}

const getAllPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
    const response = await fetch(url)
    const data = await response.json()

    return data.results.map((data: IResult, index: number) => ({
        id: index + 1,
        name: captitalize(data.name),
        url: data.url,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }))
}

const Page = async () => {
    const pokemons: IPokemon[] = await getAllPokemons()

    return(
        <>
            <div className={"w-full"}>
                <div className={"relative flex items-center flex-col overflow-hidden"}>
                    <ImageCarousel />
                </div>
                <div className={"mt-2 md:mt-10"}>
                    <div className={"max-w-7xl mx-auto"}>
                        <Pokebattle pokemons={pokemons}/>
                    </div>
                </div>
            </div>
        </>
    )
}





export default Page