import {UrlObject} from "url";
import Image from "next/image";
import captitalize from "../utils/captitalize";

const PokeTypeLabel = ({type}: {type: string}) => {
    let bgColor: string
    const _type = type.toLowerCase();
    switch (_type) {
        case "normal":
            bgColor = "bg-gray-400";
            break;
        case "fighting":
            bgColor = "bg-pink-600";
            break;
        case "flying":
            bgColor = "bg-sky-400";
            break;
        case "poison":
            bgColor = "bg-violet-500";
            break;
        case "ground":
            bgColor = "bg-amber-700";
            break;
        case "rock":
            bgColor = "bg-orange-300";
            break;
        case "bug":
            bgColor = "bg-lime-600";
            break;
        case "ghost":
            bgColor = "bg-indigo-700";
            break;
        case "steel":
            bgColor = "bg-slate-500";
            break;
        case "fire":
            bgColor = "bg-orange-600";
            break;
        case "water":
            bgColor = "bg-blue-700";
            break;
        case "grass":
            bgColor = "bg-green-600";
            break;
        case "electric":
            bgColor = "bg-yellow-500";
            break;
        case "psychic":
            bgColor = "bg-pink-500";
            break;
        case "ice":
            bgColor = "bg-cyan-500";
            break;
        case "dragon":
            bgColor = "bg-blue-800";
            break;
        case "dark":
            bgColor = "bg-stone-900";
            break;
        case "fairy":
            bgColor = "bg-pink-500";
            break;
        default:
            bgColor = "bg-gray-400";
    }

    return (
        <div className={`${bgColor} flex flex-row items-center rounded-full`}>
            <div className={"flex justify-start p-1"}>
                <div className={"relative h-5 w-5"}>
                    <Image
                        src={`/types/Pokémon_${captitalize(type)}_Type_Icon.svg`}
                        alt={"type"}
                        fill
                    />
                </div>
            </div>
            <div
                className={`pr-2 flex justify-start items-center`}>
                <p className={"text-white text-md font-bold uppercase"}>
                    {type.toUpperCase()}
                </p>
            </div>
        </div>
    )
}

export default PokeTypeLabel