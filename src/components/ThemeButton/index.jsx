import { MoonIcon, SunIcon } from "../../assets/icons";
import { useContext } from "react";

import LearnContext from "../../context/LearnContext";

const ThemeButton = () => {
    const { 
        theme, 
        toggleTheme, 
    } = useContext(LearnContext);

    return (
        <button
            id="theme-toggle"
            className="transition-colors duration-300 ease-in-out"
            onClick={toggleTheme}
        >
            {theme === "dark" ? (
                <SunIcon className="w-[38px] h-[38px] cursor-pointer text-[#00e1ff] transition-transform duration-300 hover:scale-110 hover:text-[#BD34FE]" />
            ) : (
                <MoonIcon className="w-[34px] h-[34px] cursor-pointer text-[#BD34FE] transition-transform duration-300 hover:scale-110 hover:text-[#00e1ff]" />
            )}
        </button>
    );
};

export default ThemeButton;