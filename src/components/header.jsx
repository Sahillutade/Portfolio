import { useState } from "react";


export function Header()
{

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return(
        <header>
            <div className="head-main-cont">
                <div className="head-sub-cont">
                    <div className="logo">
                        <a>Sahil Lutade</a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navigations">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="desNavBtn"> 
                                {link.name}
                                <span className="desNavSpan"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="menuBtn">
                        <div className="menuBtn-cont">
                            <div className={`line1 ${isOpen?"open1":""}`}></div>
                            <div className={`line2 ${isOpen?"open2":""}`}></div>
                            <div className={`line3 ${isOpen?"open3":""}`}></div>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {
                    isOpen && (
                        <div className="mobNavi">
                            {
                                navLinks.map((link) => (
                                    <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="mobNaviBtn"> {link.name} </a>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </header>
    )
}