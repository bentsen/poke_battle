import Link from "next/link";

const Footer = () => {

    return (
        <>
            <div className={"w-full bg-navbar h-auto pt-5 pb-5"}>
                <div className={"pl-[10%] h-full flex items-center text-white"}>
                    Created by
                    <Link className={"text-blue-400 pl-2 hover:underline"} href={"https://github.com/Freddiiy"}>Frederik Gallar,</Link>
                    <Link className={"text-blue-400 pl-2 hover:underline"} href={"https://github.com/Weinell"}>Nikolaj Weinell,</Link>
                    <Link className={"text-blue-400 pl-2 hover:underline"} href={"https://github.com/bentsen"}>Mikkel Bentsen.</Link>
                </div>
            </div>
        </>
    )
}

export default Footer