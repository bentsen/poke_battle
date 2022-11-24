import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return(
        <>
            <nav className={"w-full h-16 bg-navbar"}>
                <div className={"flex items-center justify-between h-full px-32"}>
                    <div>
                        <Image src={"/img.png"} alt={"logo"} width={150} height={100}/>
                    </div>
                    <div className={"h-full"}>
                        <ul className={"flex flex-row items-center text-lg font-medium text-betterWhite h-full"}>
                            <Link href={"/"}>
                                <li className={"cursor-pointer hover:bg-red-700 p-4"}>Home</li>
                            </Link>
                            <li className={"cursor-pointer hover:bg-red-700 p-4"}>About</li>
                            <li className={"cursor-pointer hover:bg-red-700 p-4"}>About</li>
                            <li className={"cursor-pointer hover:bg-red-700 p-4"}>About</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar