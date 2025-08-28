// Importa il componente Logo
import { Logo } from "../Logo/Logo";

// Importa il componente NavLinksList
import { NavLinksList } from "../NavLinksList/NavLinksList";

// Importa il tipo delle props di NavLinksList
import type { NavLinksListProps } from "../NavLinksList/NavLinksList";

import { useState } from "react";

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

    // Stato locale per tracciare quale link è selezionato
    // Viene inizializzato con `null` → significa che all’inizio nessun link è attivo
    const [activeLabel, setActiveLabel] = useState<string | null>(null);

    // Funzione per gestire il click/toggle su un link
    // Riceve il `label` del link cliccato
    const handleToggle = (label: string) => {
        // Se il link cliccato è già quello attivo → lo deseleziona (torna a null)
        // Altrimenti → aggiorna lo stato mettendo come attivo quel nuovo link
        setActiveLabel(prev => (prev === label ? null : label));
    };


    return (

        // Elemento <header> semantico per la barra di navigazione
        <header className="navbar-container">
            <div>
                <NavLinksList
                    navItems={navItemsLeft}
                    ariaLabel="Shop Menu"
                    activeLabel={activeLabel}
                    onToggle={handleToggle}
                />
            </div>

            <div>
                <Logo text={logoText} />
            </div>

            <div>
                <NavLinksList
                    navItems={navItemsRight}
                    ariaLabel="User Menu"
                    activeLabel={activeLabel}
                    onToggle={handleToggle}
                />
            </div>
        </header>
    );
};