// Import del logo centrale
import { Logo } from "../Logo/Logo";

// Import della lista di link (NavLinksList) e relativo tipo props
import { Navbar } from "../Navbar/Navbar";
import type { NavbarProps } from "../Navbar/Navbar";

// Import delle icone di FontAwesome per hamburger e chiudi menu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// Import di useState per gestire stato locale
import { useState } from "react";

// Import del CSS del Navbar
import "./Header.css";

// Tipizzazione delle props del componente Navbar
export type HeaderProps = {
    logoText: string;                             // Testo da mostrare al centro nel logo
    navItemsLeft: NavbarProps["navItems"];        // Array dei link della parte sinistra
    navItemsRight: NavbarProps["navItems"];       // Array dei link della parte destra
};

// Componente Navbar
export const Header = ({
    logoText,
    navItemsLeft,
    navItemsRight,
}: HeaderProps) => {

    // Stato del link attivo (label) e del menu mobile aperto/chiuso
    const [activeLabel, setActiveLabel] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // Funzione chiamata al click su un link: aggiorna activeLabel e chiude overlay
    const handleToggle = (label: string) => {
        setActiveLabel((prev) => (prev === label ? null : label)); // Toggle selezione
        setMenuOpen(false); // Chiude overlay mobile se aperto
    };

    return (
        <header className="header-container" role="banner">
            {/* Colonna sinistra */}
            <div className="navbar-left">
                {/* Bottone hamburger per aprire/chiudere overlay mobile */}
                <button
                    className="hamburger-menu"
                    aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Menu desktop lato sinistro */}
                <div className="desktop-nav-items">
                    <Navbar
                        navItems={navItemsLeft}       // Array link
                        ariaLabel="Menu principale"   // Etichetta ARIA per accessibilità
                        activeLabel={activeLabel}     // Stato link selezionato
                        onToggle={handleToggle}       // Funzione di callback al click
                    />
                </div>
            </div>

            {/* Colonna centrale: logo */}
            <div className="navbar-center">
                <Logo text={logoText} />
            </div>

            {/* Colonna destra: menu utente */}
            <div className="navbar-right">
                <Navbar
                    navItems={navItemsRight}         // Array link lato destro
                    ariaLabel="Menu utente"          // Etichetta ARIA
                    activeLabel={activeLabel}        // Stato link selezionato
                    onToggle={handleToggle}          // Callback click
                    hideTextOnMobile={true}          // Nasconde testo su mobile (solo icone)
                />
            </div>

            {/* Overlay mobile */}
            {menuOpen && (
                <div className="mobile-menu-overlay">
                    {/* Bottone chiudi overlay */}
                    <button
                        className="close-menu"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Chiudi menu"
                    >
                        <FontAwesomeIcon icon={faTimes} className="x-icon" />
                    </button>

                    {/* Lista link mobile */}
                    <nav className="mobile-nav">
                        <Navbar
                            navItems={navItemsLeft}     // Array link lato sinistro
                            ariaLabel="Menu mobile"     // Etichetta ARIA
                            activeLabel={activeLabel}   // Stato link selezionato
                            onToggle={handleToggle}     // Callback click chiude overlay
                        />
                    </nav>
                </div>
            )}
        </header>
    );
};