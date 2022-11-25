'use client'

import Image from "next/image";
import {Combobox} from "@headlessui/react";
import {Fragment, useState} from "react";

interface IPokemon {
    id: number
    name: string,
    image: string,
}

const Searchbar = ({pokemons} : {pokemons: IPokemon[]}) => {
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState<SearchOptions>();

    const filteredPokemons = !search
        ? null
        : pokemons.filter((s) => s.name.toLowerCase().startsWith(search.toLowerCase()));

    const handlePokemon = () => {

    }

    return(
        <>
            <div>
                <Combobox value={selected} onChange={handlePokemon} nullable>
                    <Combobox.Input as={Fragment} onChange={(e) => setSearch(e.target.value)} displayValue={(selected: SearchOptions) => selected?.name}>
                        <input
                            className={"bg-betterBlack text-betterWhite w-full h-12 rounded-t outline-0 indent-4"}
                            placeholder={"Type Pokémon name"}
                            type="text"/>
                    </Combobox.Input>
                    {search && (
                        <div className={"relative"}>
                            <Combobox.Options className={"bg-betterWhite text-black absolute w-full z-50 max-h-56 rounded-b overflow-y-scroll"}>
                                <p className={"ml-3 text-summoner-gray"}>Pokémons</p>
                                {filteredPokemons != null && (
                                    filteredPokemons.length === 0 ? (
                                        <SearchOptions name={search} image={""}/>
                                    ) : (
                                        filteredPokemons.map((e) => (
                                            <SearchOptions key={e.id} name={e.name} image={e.image}/>
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

interface SearchOptions {
    name: string,
    image: string,
}

const SearchOptions = (props: SearchOptions) => {
    const {name, image} = props;
    return(
        <>
            <Combobox.Option value={props}>
                {({active, selected}) => (
                    <>
                        <ul className={""}>
                            <li className={`hover:bg-hoverColor hover:text-betterWhite ${active ? "bg-hoverColor text-betterWhite" : ""} p-3 cursor-pointer`}>
                                <div className={"flex items-center"}>
                                    <Image
                                        priority
                                        src={image}
                                        alt={"poke"}
                                        width={30}
                                        height={30}/>
                                    <div className={"flex justify-between items-center w-full"}>
                                        <div>
                                            <span className={"ml-1"}>{name}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </>
                )}
            </Combobox.Option>
        </>
    )
}

export default Searchbar