import Image from "next/image";
import PokemonSelector from "./pokemonSelector";
import {IPokemon} from "../utils/@types/pokemon.t";

interface IResult {
    name: string,
    url: string
}

const getAllPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
    const response = await fetch(url)
    const data = await response.json()

    return data.results.map((data: IResult, index: number) => ({
        id: index + 1,
        name: data.name,
        url: data.url,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png`
    }))
}

const Page = async () => {
    const pokemons: IPokemon[] = await getAllPokemons()

    return(
        <>
            <div className={"w-full"}>
                <div className={"relative flex items-center flex-col overflow-hidden"}>
                    <ImageCarousel pokemons={pokemons}/>
                </div>
                <div className={"w-full mt-10"}>
                    <div className={"mx-auto my-0 w-[1080px]"}>
                        <div className={"flex justify-between px-14 items-center mt-16"}>
                            <PokemonSelector pokemons={pokemons}/>
                            <div className={"flex flex-col"}>
                                <button className={"w-40 h-9 bg-betterBlue text-white rounded"}>Fight</button>
                            </div>
                            <PokemonSelector pokemons={pokemons}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const ImageCarousel = ({pokemons}: {pokemons: IPokemon[]}) => {
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


export default Page