import ThemeButton from "../ThemeButton";
// import LangButton from "../LangButton";

import logo from "../../assets/svg/learn-cyberjs-logo-light.svg"
import logo_dark from "../../assets/svg/learn-cyberjs-logo-dark.svg"

import {  GithubIcon } from "../../assets/icons";
// import { DocIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import "./styles.css";


const Header = () => {
    return (
        <>
            <header>
                <div className="header-logo">
    
                    <Link to="/" className="transition-transform duration-300 hover:scale-110 hidden dark:flex">
                        <img
                            className="h-[50px] object-fill "
                            src={logo_dark}
                            alt="JS-logo"
                        />
                    </Link>
                    <Link to="/" className="transition-transform duration-300 hover:scale-110 dark:hidden">
                        <img
                            className="h-[50px] object-fill"
                            src={logo}
                            alt="JS-logo"
                        />
                    </Link>
                
                </div>

                <div className="header-buttons">
                    <div id="main-nav" className="flex justify-center items-center">
                        <ul className="flex gap-x-4 text-black dark:text-white">
                            {/* <li >
                                <DocIcon className="w-4 h-4" />
                                <a href=""  >
                                    Docs
                                </a>
                            </li> */} 
                            <a href="https://github.com/josesalopasog/ui-cyberjs-web.git" target="_blank">
                                <li >
                                    <GithubIcon className="w-4 h-4" />
                                    <p>Github</p>
                                    
                                </li>
                            </a>
                        </ul>
                    </div>
                    <ThemeButton />
                    {/* <LangButton /> */}
                </div>
            </header>    
        </>
    );
}

export default Header; 