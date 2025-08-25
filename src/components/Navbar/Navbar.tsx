// Importa il componente Logo
import { Logo } from "../Logo/Logo";

// Importa il componente NavLinksList
import { NavLinksList } from "../NavLinksList/NavLinksList";

// Importa il tipo delle props di NavLinksList
import type { NavLinksListProps } from "../NavLinksList/NavLinksList";

import "./Navbar.css";

// Definizione delle props del componente Navbar
export type NavbarProps = {
    // Testo da mostrare nel logo
    logoText: string;
    // Lista dei link da passare a NavLinksList sx
    navItemsLeft: NavLinksListProps["navItems"];
    // Lista dei link da passare a NavLinksList dx
    navItemsRight: NavLinksListProps["navItems"];
}

// Componente Navbar: combina Logo e NavLinksList in un header
export const Navbar = ({ logoText, navItemsLeft, navItemsRight }: NavbarProps) => {

    return (
        // Elemento <header> semantico per la barra di navigazione
        <header className="navbar-container">
            <div>
                {/* Lista dei link di navigazione sx */}
                <NavLinksList navItems={navItemsLeft} ariaLabel="Shop Menu" />
            </div>

            <div>
                {/* Logo del sito */}
                <Logo text={logoText} />
            </div>

            <div>
                {/* Lista dei link di navigazione dx */}
                <NavLinksList navItems={navItemsRight} ariaLabel="User Menu" />
            </div>
        </header>
    )
}