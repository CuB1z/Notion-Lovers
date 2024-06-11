import styles from "@styles/components/header/SchemeSwitcher.module.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function SchemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const handleSchemeChange = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("scheme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("scheme", "light");
        }
    };

    return (
        <div className={styles.scheme_switcher}>
            <button
                className={`${styles.scheme_switcher_button}`}
                onClick={handleSchemeChange}
            >
                <span id="light_icon">🌞</span>
                <span id="dark_icon">🌙</span>
            </button>
        </div>
    );
}