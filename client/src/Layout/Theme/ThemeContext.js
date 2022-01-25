import React, {useState, useEffect, createContext} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    function ls() {
        let localData = localStorage.getItem("isLightTheme");

        return localData ? JSON.parse(localData) : true;
    }

    const [isLightTheme, setIsLight] = useState(ls());
    const [dark] = useState({
        bgfordvfu: "hsl(213,17%,23%)",
        text1: "#ffffff",
        element: "#2b3945",
        mainbg: "hsl(207, 26%, 17%)",
        bg: "#ee9836",
        textheader: "#ffffff",
        hover: "#fadebf",
        text2: "#ee9836",

    });
    const [light] = useState({
        text1: "#111517",
        inp: "#ffffff",
        mainbg: "#ffffff",
        bgfordvfu: "#1e90ff",
        textheader: "#1e90ff",
        bg: "#ffffff",
        hover: "#dcf1fa",
        text2: "#1e90ff",
    });

    let toggleTheme = () => {
        return setIsLight(!isLightTheme);
    };

    useEffect(() => {
        localStorage.setItem("isLightTheme", JSON.stringify(isLightTheme));

        let by = document.body;

        by.style.background = `${isLightTheme ? light.mainbg : dark.mainbg}`;
    }, [isLightTheme, light.mainbg, dark.mainbg]);

    return (
        <ThemeContext.Provider
            value={{isLightTheme, setIsLight, dark, light, toggleTheme}}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;