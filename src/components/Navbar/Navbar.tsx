// Importa il componente Logo
import { Logo } from "../Logo/Logo";

// Importa il componente NavLinksList
import { NavLinksList } from "../NavLinksList/NavLinksList";

// Importa il tipo delle props di NavLinksList
import type { NavLinksListProps } from "../NavLinksList/NavLinksList";

// Definizione delle props del componente Navbar
export type NavbarProps = {
    // Testo da mostrare nel logo
    logoText: string;
    // Lista dei link da passare a NavLinksList
    navItems: NavLinksListProps["navItems"];
}

// Componente Navbar: combina Logo e NavLinksList in un header
export const Navbar = ({ logoText, navItems }: NavbarProps) => {

    return (
        // Elemento <header> semantico per la barra di navigazione
        <header>
            {/* Logo del sito */}
            <Logo text={logoText} />

            {/* Lista dei link di navigazione */}
            <NavLinksList navItems={navItems} />
        </header>
    )
}