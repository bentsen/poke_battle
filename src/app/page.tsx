import Image from "next/image";

interface IPokemon {
    id: number
    name: string,
    image: string,
}

const getAllPokeNames = async () => {

    const url = "https://pokeapi.co/api/v2/pokemon?limit=150";
    const res = await fetch(url);
    const data = await res.json();
    return data.results.map((data: IPokemon, index: number) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
        1}.png`,
    }));
}

const Page = async () => {

    const pokemons: IPokemon[] = await getAllPokeNames()

    return(
        <>
            <div className={"w-full"}>
                <div className={"relative flex items-center"}>
                    <div id={"slider"} className={"w-full h-40 whitespace-nowrap pokemon-scroll"}>
                        {pokemons.map((pokemon) =>
                            <div key={pokemon.id} className={"inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"}>
                                <div className={"text-center"}>
                                    <Image
                                        className={"h-16 w-auto"}
                                        priority
                                        src={pokemon.image}
                                        alt={pokemon.name}
                                        width={100}
                                        height={120}/>
                                    <span>{pokemon.name}</span>
                                </div>
                            </div>
                        )}
                        {pokemons.map((pokemon) =>
                            <div key={pokemon.id} className={"inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"}>
                                <div className={"text-center"}>
                                    <Image
                                        className={"h-16 w-auto"}
                                        priority src={pokemon.image}
                                        alt={pokemon.name}
                                        width={100}
                                        height={120}/>
                                    <span>{pokemon.name}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={"w-full mt-10"}>
                    <div className={"mx-auto my-0 w-[1080px]"}>
                        <div className={"flex justify-between px-20 items-center"}>
                            <div className={"w-96 h-96 bg-betterWhite rounded"}>
                                <div className={"p-10 flex flex-col"}>
                                    <div>
                                        1. Choose first Pokemon
                                        <input className={"bg-white w-full h-9 rounded outline-0 indent-4"} type="text"/>
                                    </div>
                                    <div className={"h-40 relative"}>
                                        <Image
                                            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}
                                            alt={"pokemon2"}
                                            fill
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            Stats:
                                        </div>
                                        <div className={"flex flex-wrap gap-2 text-xs"}>
                                            <div>
                                                HP: 100
                                            </div>
                                            <div>
                                                Attack: 100
                                            </div>
                                            <div>
                                                Defense: 100
                                            </div>
                                            <div>
                                                Sp_Attack: 100
                                            </div>
                                            <div>
                                                Sp_Defense: 100
                                            </div>
                                            <div>
                                                Speed: 100
                                            </div>
                                            <div>
                                                Sum_stats: 100
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"text-2xl font-medium"}>
                                vs
                            </div>
                            <div className={"w-96 h-96 bg-betterWhite rounded"}>
                                <div className={"p-10 flex flex-col"}>
                                    <div>
                                        2. Choose second Pokemon
                                        <input className={"bg-white w-full h-9 rounded outline-0 indent-4"} type="text"/>
                                    </div>
                                    <div className={"h-40 relative"}>
                                        <Image
                                            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}
                                            alt={"pokemon2"}
                                            fill
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            Stats:
                                        </div>
                                        <div className={"flex flex-wrap gap-2 text-xs"}>
                                            <div>
                                                HP: 100
                                            </div>
                                            <div>
                                                Attack: 100
                                            </div>
                                            <div>
                                                Defense: 100
                                            </div>
                                            <div>
                                                Sp_Attack: 100
                                            </div>
                                            <div>
                                                Sp_Defense: 100
                                            </div>
                                            <div>
                                                Speed: 100
                                            </div>
                                            <div>
                                                Sum_stats: 100
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"flex items-center mt-20 flex-col gap-2"}>
                            <div className={"text-left w-40"}>3.Fight</div>
                            <button className={"w-40 h-9 bg-betterBlue text-white rounded"}>Fight</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page