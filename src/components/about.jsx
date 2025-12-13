

export function About()
{
    return(
        <section id="about" className="aboutSec">
            <div className="aboutSecCont">
                <h2 className="aboutSecHead">
                    About <span className="me">Me</span> 
                </h2>

                <div className="aboutCont">
                    {/* Left Content */}
                    <div className="aboutLeftCont">
                        <p className="aboutLeftPara1">
                            I'm a passionate full-stack developer with a keen interest in building scalable, 
                            user-friendly web
                            applications. With a strong foundation in both frontend and backend technologies, I strive to create
                            seamless digital experiences.
                        </p>
                        <p className="aboutLeftPara2">
                            My journey in web development started with a curiosity about how things work on the 
                            internet. Since then,
                            I've honed my skills through countless projects, learning from challenges, and staying updated with the
                            latest industry trends.
                        </p>

                        <div className="aboutlRightCont">
                            <div className="aboutlRightCont1">
                                <div className="bi bi-code-slash"></div>
                                <div>
                                    <h3 className="cont1Head">Clean Code</h3>
                                    <p className="cont1Para">
                                        I write maintainable, well-documented code following industry best practices.
                                    </p>
                                </div>
                            </div>
                            <div className="aboutlRightCont1">
                                <div className="bi bi-lightning-charge"></div>
                                <div>
                                    <h3 className="cont1Head">Performance</h3>
                                    <p className="cont1Para">
                                        Optimized applications with fast load times and smooth user interactions.
                                    </p>
                                </div>
                            </div>
                            <div className="aboutlRightCont1">
                                <div className="bi bi-people"></div>
                                <div>
                                    <h3 className="cont1Head">Collaboration</h3>
                                    <p className="cont1Para">
                                        Effective communication and teamwork to deliver exceptional results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Stats card */}
                    <div className="aboutRightCont">
                        <div className="rightContCard">
                            <div className="rightContCardHead">2+</div>
                            <p className="rightContCardPara">
                                Projects Completed
                            </p>
                        </div>
                        <div className="rightContCard">
                            <div className="rightContCardHead">15+</div>
                            <p className="rightContCardPara">
                                Technologies
                            </p>
                        </div>
                        <div className="rightContCard">
                            <div className="rightContCardHead">2</div>
                            <p className="rightContCardPara">
                                Certifications
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}