import Image from "next/image";

const Navbar = () => {
    return(
        <>
            <nav className={"w-full h-16 bg-navbar"}>
                <div className={"flex items-center h-full px-10"}>
                    <div>
                        <Image src={"/img.png"} alt={"logo"} width={150} height={100}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar