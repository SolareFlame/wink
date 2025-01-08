import {useTheme} from "../context/ThemeContext";

import moon from '../assets/logo/moon.svg';
import sun from '../assets/logo/sun.svg';

export function ThemeToggle() {
    const { dark_mode, toggleDarkMode } = useTheme();

    return (
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            {dark_mode ? <img src={sun} alt="Sun Icon"/> : <img src={moon} alt="Moon Icon"/>}
        </div>
    );
}