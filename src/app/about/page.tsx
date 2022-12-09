
const About = () => {

    return(
        <>
            <div className={"w-full max-w-7xl mx-auto flex justify-center"}>
                <div className={"mw-auto w-full bg-darkerWhite h-screen flex justify-center"}>
                    <div className={"px-2 mt-10"}>
                        <h1 className={"text-3xl font-bold pb-2"}>About</h1>
                        <div>
                            <div>
                                <h3 className={"font-bold text-2xl"}>What is PokeBattle?</h3>
                                <div className={"text-lg"}>
                                    <span>This website was made as a school project but quickly became something that we thought was cool and wanted to build on it and make a finished product out of it.</span>
                                </div>
                            </div>
                            <div className={"mt-10"}>
                                <h3 className={"font-bold text-2xl"}>What is machine learning?</h3>
                                <div className={"text-lg"}>
                                    <span>Marchine learning is a type of artificial intelligence that allows software to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning use historical data as input to predcit new output values</span>
                                </div>
                            </div>
                            <div className={"mt-10"}>
                                <h3 className={"font-bold text-2xl"}>How does PokéBattle work?</h3>
                                <div className={"text-lg"}>
                                    <span>The way PokéBattle works is by using machine learning to predict the outcome of the users selected battle</span>
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