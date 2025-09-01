import { Logo } from "../Logo/Logo";
import { NavLinksList } from "../NavLinksList/NavLinksList";
import type { NavLinksListProps } from "../NavLinksList/NavLinksList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Navbar.css";

export type NavbarProps = {
    logoText: string;
    navItemsLeft: NavLinksListProps["navItems"];
    navItemsRight: NavLinksListProps["navItems"];
};

export const Navbar = ({
    logoText,
    navItemsLeft,
    navItemsRight,
}: NavbarProps) => {
    const [activeLabel, setActiveLabel] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = (label: string) => {
        setActiveLabel((prev) => (prev === label ? null : label));
    };

    return (
        <header className="navbar-container">
            {/* Colonna sinistra */}
            <div className="navbar-left">
                <button
                    className="hamburger-menu"
                    aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Desktop menu */}
                <div className="desktop-nav-links">
                    <NavLinksList
                        navItems={navItemsLeft}
                        ariaLabel="Menu principale"
                        activeLabel={activeLabel}
                        onToggle={handleToggle}
                    />
                </div>
            </div>

            {/* Colonna centrale */}
            <div className="navbar-center">
                <Logo text={logoText} />
            </div>

            {/* Colonna destra */}
            <div className="navbar-right">
                <NavLinksList
                    navItems={navItemsRight}
                    ariaLabel="Menu utente"
                    activeLabel={activeLabel}
                    onToggle={handleToggle}
                    hideTextOnMobile={true}
                />
            </div>

            {/* Overlay mobile */}
            {menuOpen && (
                <div className="mobile-menu-overlay">
                    <button
                        className="close-menu"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Chiudi menu"
                    >
                        <FontAwesomeIcon icon={faTimes} className="x-icon" />
                    </button>
                    <nav className="mobile-nav">
                        <NavLinksList
                            navItems={navItemsLeft}
                            ariaLabel="Menu mobile"
                            activeLabel={activeLabel}
                            onToggle={handleToggle}
                        />
                    </nav>
                </div>
            )}
        </header>
    );
};
