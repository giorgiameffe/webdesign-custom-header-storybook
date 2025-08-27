// Importazione il componente atomico NavLink
import { NavLink } from "../NavLink/NavLink";

// Importazione il tipo delle props del componente NavLink
import type { NavLinkProps } from "../NavLink/NavLink";

import { useState } from "react";

// Importazione NavLinksList css
import "./NavLinksList.css"

// Definizione delle props di NavLinksList
export type NavLinksListProps = {
    // Array di oggetti NavLinkProps, ogni oggetto rappresenta un link
    navItems: NavLinkProps[];
    ariaLabel: string;
}

// Componente NavLinksList: rende una lista di link di navigazione
export const NavLinksList = ({ navItems, ariaLabel }: NavLinksListProps) => {

    // Stato locale per tracciare quale link è selezionato
    // Inizializza con il label del primo navItem che ha `selected: true`
    // Se nessun navItem è selezionato, lo stato iniziale sarà null
    const [activeLabel, setActiveLabel] = useState<string | null>(
        navItems.find(navItem => navItem.selected)?.label || null
    );

    // Funzione per togglare la selezione di un link
    // Se il link cliccato è già selezionato, deseleziona (imposta null)
    // Altrimenti, seleziona il link cliccato
    const toggleLabel = (label: string) => {
        setActiveLabel(prev => (prev === label ? null : label));
    };

    // Mappa la lista dei navItems per aggiornare lo stato di selezione
    // e preservare l'onClick originale di ogni item
    const updatedItems = navItems.map(item => ({
        ...item,                                // copia tutte le proprietà originali del navItem
        selected: item.label === activeLabel,   // imposta selected se il label corrisponde allo stato attivo
        onClick: () => {
            toggleLabel(item.label);            // aggiorna lo stato quando il link viene cliccato
            item.onClick?.();                   // chiama la funzione onClick originale se esiste
        },
    }));

    return (
        // Elemento <nav> semantico per la navigazione
        <nav aria-label={ariaLabel}>
            {/* Lista non ordinata dei link */}
            <ul className="nav-items-list">
                {/* Mappa ogni link dell'array in un <li> contenente un NavLink */}
                {updatedItems.map((navItem, index) =>
                    <li key={index} >
                        {/* Spread delle props del singolo link su NavLink */}
                        <NavLink {...navItem} />
                    </li>
                )}
            </ul>
        </nav>
    )
}