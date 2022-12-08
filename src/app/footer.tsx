import Link from "next/link";

const Footer = () => {

    return (
        <>
            <div className={"w-full flex flex-col md:flex-row justify-center items-center bg-betterBlack h-auto pt-5 pb-5"}>
                <div className={"h-full text-white"}>
                    Created by
                </div>
                <div>

                <Link className={"text-blue-400 pl-2 hover:underline"} href={"https://github.com/Freddiiy"}>Frederik
                    Gallar,</Link>
                <Link className={"text-blue-400 pl-2 hover:underline"} href={"https://github.com/Weinell"}>Nikolaj
                    Weinell,</Link>
                <Link className={"text-blue-400 pl-2 hover:underline"} href={"https://github.com/bentsen"}>Mikkel
                    Bentsen.</Link>
                </div>
            </div>
        </>
    )
}

export default Footer