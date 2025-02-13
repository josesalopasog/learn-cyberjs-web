import { useEffect, useState } from "react";

import PropTypes from "prop-types"
import LearnContext from "../LearnContext";

export const LearnProvider = ({ children }) => {
    LearnProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    /*---Util: Toggle the theme ---*/
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark")
        } else {
            document.querySelector("html").classList.remove("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
        <LearnContext.Provider value={{
            theme,
            setTheme,
            toggleTheme
        }}>
            {children}
        </LearnContext.Provider>
    );
};