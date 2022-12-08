import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return(
        <>
            <nav className={"w-full h-16 bg-betterBlack"}>
                <div className={"flex items-center justify-between w-full max-w-7xl h-full px-5 md:px-32"}>
                    <div className={"cursor-pointer"}>
                        <Link href={"/"}>
                            <Image src={"/img.png"} alt={"logo"} width={150} height={100}/>
                        </Link>
                    </div>
                    <div className={"h-full"}>
                        <ul className={"flex flex-row items-center text-lg font-medium text-betterWhite h-full"}>
                            <Link href={"/"}>
                                <li className={"cursor-pointer hover:underline hover:bg-hoverColor p-4"}>Battle</li>
                            </Link>
                            <Link href={"/about"}>
                                <li className={"cursor-pointer hover:underline hover:bg-hoverColor p-4"}>About</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar