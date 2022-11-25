import Image from "next/image";
import PokemonSelector from "./pokemonSelector";
import {IPokemon} from "../utils/@types/pokemon.t";


interface IResult {
    name: string,
    url: string
}

const getAllPokeNames = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const results: IResult[] = data.results
            const promisesArray = results.map(result => {
                return fetch(result.url).then(response => response.json());
            })
            return Promise.all(promisesArray);
        });
}

const Page = async () => {
    const pokemons: IPokemon[] = await getAllPokeNames()

    return(
        <>
            <div className={"w-full"}>
                <div className={"relative flex items-center flex-col overflow-hidden"}>
                    <ImageCarousel pokemons={pokemons}/>
                </div>
                <div className={"w-full mt-10"}>
                    <div className={"mx-auto my-0 w-[1080px]"}>
                        <div className={"flex justify-between px-14 items-center mt-24"}>
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
                {pokemons.map((pokemon) =>
                    <div key={pokemon.id} className={"inline-block p-2 pointer-events-none border-b border-black"}>
                        <div className={"text-center"}>
                            <div className={"bg-darkerWhite rounded-2xl"}>
                                <Image
                                    className={"h-16 w-auto"}
                                    priority
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={120}/>
                            </div>
                            <span>{pokemon.name}</span>
                        </div>
                    </div>
                )}
                {pokemons.map((pokemon) =>
                    <div key={pokemon.id} className={"inline-block p-2 pointer-events-none border-b border-black"}>
                        <div className={"text-center"}>
                            <div className={"bg-darkerWhite rounded-2xl"}>
                                <Image
                                    className={"h-16 w-auto"}
                                    priority src={pokemon.sprites.front_shiny}
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