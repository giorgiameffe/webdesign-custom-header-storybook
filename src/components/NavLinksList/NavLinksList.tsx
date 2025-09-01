// Importazione il componente atomico NavLink
import { NavLink } from "../NavLink/NavLink";

// Importazione il tipo delle props del componente NavLink
import type { NavLinkProps } from "../NavLink/NavLink";

// Importazione NavLinksList css
import "./NavLinksList.css"

// Definizione delle props di NavLinksList
export type NavLinksListProps = {
    // Array di oggetti NavLinkProps, ogni oggetto rappresenta un link
    navItems: NavLinkProps[];
    ariaLabel: string;        // descrizione ARIA del <nav>
    activeLabel: string | null; // link attivo (o null se nessuno)
    onToggle: (label: string) => void; // callback al click su un link
    hideTextOnMobile?: boolean;
}

// Componente NavLinksList: rende una lista di link di navigazione
export const NavLinksList = ({ navItems, ariaLabel, activeLabel, onToggle }: NavLinksListProps) => {

    // Mappa la lista dei navItems per aggiornare lo stato di selezione
    // e preservare l'onClick originale di ogni item
    const updatedItems = navItems.map(item => ({
        ...item,                                // copia tutte le proprietà originali del navItem
        selected: item.label === activeLabel,   // imposta selected se il label corrisponde allo stato attivo
        onClick: () => {
            onToggle(item.label);            // aggiorna lo stato quando il link viene cliccato
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