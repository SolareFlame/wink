import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [dark_mode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!dark_mode);
        document.body.className = dark_mode ? 'light' : 'dark';

        const profilView = document.querySelector('.Profil-view');
        if (profilView) {
            profilView.className = dark_mode ? 'Profil-view light' : 'Profil-view dark';
        }
    };

    return (
        <ThemeContext.Provider value={{ dark_mode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
