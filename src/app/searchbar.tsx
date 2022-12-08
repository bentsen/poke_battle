'use client'

import Image from "next/image";
import {Combobox} from "@headlessui/react";
import React, {Fragment, useState} from "react";
import {IPokemon} from "../utils/@types/pokemon.t";

const Searchbar = ({pokemons, setPokemon} : {pokemons: IPokemon[], setPokemon: React.Dispatch<React.SetStateAction<IPokemon | undefined>>}) => {
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState<IPokemon | undefined>();

    const filteredPokemons = !search
        ? null
        : pokemons.filter((s) => s.name.toLowerCase().startsWith(search.toLowerCase()));

    const handlePokemon = (state: IPokemon) => {
        setPokemon(state)
    }

    return(
        <>
            <div>
                <Combobox value={selected} onChange={handlePokemon} nullable>
                    <Combobox.Input as={Fragment} onChange={(e) => setSearch(e.target.value)} displayValue={(selected: IPokemon) => selected?.name}>
                        <input
                            className={"bg-betterBlack text-betterWhite w-full h-12 rounded-t outline-0 indent-4"}
                            placeholder={"Type Pokémon name"}
                            type="text"/>
                    </Combobox.Input>
                    {search && (
                        <div className={"relative"}>
                            <Combobox.Options className={"bg-betterWhite text-black absolute w-full max-h-56 z-50 rounded-b overflow-y-scroll"}>
                                <p className={"ml-3 text-summoner-gray"}>Pokémons</p>
                                {filteredPokemons != null && (
                                    filteredPokemons.length === 0 ? (
                                        <SearchOptions pokemon={undefined}/>
                                    ) : (
                                        filteredPokemons.map((e, index) => (
                                            <SearchOptions key={index} pokemon={e}/>
                                        ))
                                    )
                                )}
                            </Combobox.Options>
                        </div>
                    )}
                </Combobox>
            </div>
        </>
    )
}


const SearchOptions = ({pokemon} : {pokemon: IPokemon | undefined}) => {

    return(
        <>
            <Combobox.Option value={pokemon}>
                {({active, selected}) => (
                    <>
                        <ul className={""}>
                            <li className={`hover:bg-hoverColor hover:text-betterWhite ${active ? "bg-hoverColor text-betterWhite" : ""} p-3 cursor-pointer`}>
                                {pokemon ? (
                                    <div className={"flex items-center"}>
                                        <Image
                                            priority
                                            src={pokemon.image}
                                            alt={"poke"}
                                            width={30}
                                            height={30}/>
                                        <div className={"flex justify-between items-center w-full"}>
                                            <div>
                                                <span className={"ml-1"}>{pokemon.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : "No pokemon"}
                            </li>
                        </ul>
                    </>
                )}
            </Combobox.Option>
        </>
    )
}

export default Searchbar