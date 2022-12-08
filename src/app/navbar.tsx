import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return(
        <>
            <nav className={"w-full h-16 bg-betterBlack"}>
                <div className={"flex items-center justify-between h-full px-5 md:px-32"}>
                    <div className={"text-white md:hidden"}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16">

                            </path>
                        </svg>
                    </div>
                    <div className={"cursor-pointer"}>
                        <Link href={"/"}>
                            <Image src={"/img.png"} alt={"logo"} width={150} height={100}/>
                        </Link>
                    </div>
                    <div className={"h-full"}>
                        <ul className={"hidden md:flex flex-row items-center text-lg font-medium text-betterWhite h-full"}>
                            <Link href={"/"}>
                                <li className={"cursor-pointer hover:underline hover:bg-hoverColor p-4"}>Home</li>
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