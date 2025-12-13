

export function Footer()
{

    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="footerCont">
                <div className="footerSec">

                    {/* Brand */}
                    <div>
                        <h3 className="BrandHead">SL</h3>
                        <p className="BrandPara">Full Stack Developer</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="navigation">Navigation</h4>
                        <ul className="navigationList">
                            <li>
                                <a href="#home" className="naviListCont">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="naviListCont">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="naviListCont">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="naviListCont">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="navigation">Resources</h4>
                        <ul className="navigationList">
                            <li>
                                <a href="https://drive.google.com/file/d/18lsrtkrxp33ChsOXHaVCOFLBP1hN6i4-/view?usp=sharing" className="naviListCont">
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Sahillutade" className="naviListCont">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sahillutade" className="naviListCont">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="navigation">Connect</h4>
                        <ul className="navigationList">
                            <li>
                                <a href="https://x.com/SahilLutade" className="naviListCont">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sahillutade" className="naviListCont">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Sahillutade" className="naviListCont">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="mailto:lutadesahil@gmail.com" className="naviListCont">
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider">
                    <div className="dividerCont">
                        <p className="dividerPara">
                            Made with <span className="bi bi-heart"></span> by Sahil Lutade © {currentYear}
                        </p>
                        <div className="dividerInner">
                            <a href="#" className="naviListCont">
                                Privacy Policy
                            </a>
                            <a href="#" className="naviListCont">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}