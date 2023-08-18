import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function DarkModeButton() {

    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);


    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    function toggleDarkMode() {
        setDarkSide(!darkSide);
        setTheme(colorTheme);
    }


    return (
        <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
        />
    );
}
