
const About = () => {

    return(
        <>
            <div className={"w-full flex justify-center"}>
                <div className={"mw-auto my-0 w-[1080px] bg-darkerWhite h-screen flex justify-center"}>
                    <div className={"w-3/4 mt-10"}>
                        <h1 className={"text-3xl font-bold"}>About</h1>
                        <div className={"p-5"}>
                            <div>
                                <h3 className={"font-bold"}>What is PokeBattle?</h3>
                                <div className={"p-2"}>
                                    <span>This website was made as a school project but quickly became something that we thought was cool and wanted to build on it and make a finished product out of it.</span>
                                </div>
                            </div>
                            <div className={"mt-10"}>
                                <h3 className={"font-bold"}>What is machine learning?</h3>
                                <div className={"p-2"}>
                                    <span>Marchine learning is a type of artificial intelligence that allows software to become more accurate at predicting outcomes wighout being explicitly programmed to do so. Marchine learning use historical data as input to predcit new output values</span>
                                </div>
                            </div>
                            <div className={"mt-10"}>
                                <h3 className={"font-bold"}>How does PokéBattle work?</h3>
                                <div className={"p-2"}>
                                    <span>The way PokéBattle works is by using marchine learning to predict the outcome of the users selected battle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About