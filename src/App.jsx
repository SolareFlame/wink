import './assets/css/App.css';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from "./context/ThemeContext";

import pp from './assets/pp/pp.jpg';
import {EditProfile} from "./components/EditProfile";

function App() {
  return (
    <ThemeProvider>
        <div className="App">
            <div className="Background">
            <header className="App-header">
                <p>WINK</p>
                <ThemeToggle/>
            </header>

            <div className="App-title">
                <h1>Bonjour, Solare</h1>
                <h2>Vous êtes arrivé sur votre page de profil ! Vous pouvez visioner celui-ci et modifier vos
                    informations.</h2>
            </div>
            </div>


            <div className="Profil">

                <div className="Profil-view light">
                    <div className="Profil-top">
                        <img src={pp} alt="Profil Picture"/>
                        <h2>Solare</h2>
                    </div>
                    <div className="Profil-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere, lacus id tristique aliquam, mi metus pharetra libero, in malesuada enim diam convallis diam.</p>
                    </div>
                </div>

                <div className="Profil-edit light">
                    <div className="Profil-edit-top">
                        <p>Mon compte</p>
                        <EditProfile/>
                    </div>

                    <div className="Profil-edit-desc">
                        <p>Nom : Solare</p>
                        <p>Prénom : Solare</p>
                        <p>Mail : solare@solare.solare</p>
                    </div>
                </div>
            </div>
        </div>
    </ThemeProvider>
  );
}

console.log(`Current mode: ${document.body.className}`);

export default App;
