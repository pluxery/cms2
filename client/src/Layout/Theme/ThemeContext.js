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
        mainbg: "#202C37FF",
        bg: "#ee9836",
        textheader: "#ffffff",
        text2: "#ee9836",
        inf: "#2b3945",
        ctext:"#ee9836",
        cbg:"#202C37FF",
        container:"rgb(141,111,74)",
        th: "#ee9836"

    });
    const [light] = useState({
        text1: "#111517",
        inp: "#ffffff",
        mainbg: "#ffffff",
        bgfordvfu: "#1e90ff",
        textheader: "#1e90ff",
        bg: "#ffffff",
        text2: "#1e90ff",
        element: "#ffffff",
        inf: "#ecebeb",
        ctext:"#111517",
        cbg:"#f2fafe",
        container:"rgb(215, 242, 255)",
        th: "#d8d8d8"
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