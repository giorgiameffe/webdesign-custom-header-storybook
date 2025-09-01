// Import del componente atomico NavLink
import { NavLink } from "../NavLink/NavLink";

// Import del tipo delle props di NavLink
import type { NavLinkProps } from "../NavLink/NavLink";

// Import del CSS specifico per la lista dei link
import "./NavLinksList.css"

// Tipizzazione delle props di NavLinksList
export type NavLinksListProps = {
    navItems: NavLinkProps[];              // Array di oggetti NavLinkProps, ogni oggetto rappresenta un link
    ariaLabel: string;                     // Etichetta ARIA descrittiva per il <nav>
    activeLabel: string | null;            // Link attivo (o null se nessuno)
    onToggle: (label: string) => void;     // Callback da eseguire al click su un link
    hideTextOnMobile?: boolean;            // Nasconde testo dei link su dispositivi mobili
}

// Componente NavLinksList: rende una lista di link di navigazione
export const NavLinksList = ({ navItems, ariaLabel, activeLabel, onToggle }: NavLinksListProps) => {

    // Mappa la lista dei navItems per aggiornare lo stato di selezione
    // e preservare l'onClick originale di ogni item
    const updatedItems = navItems.map(item => ({
        ...item,                                    // Copia tutte le proprietà originali del navItem
        selected: item.label === activeLabel,       // Imposta selected se il label corrisponde allo stato attivo
        onClick: () => {
            onToggle(item.label);                   // Aggiorna lo stato attivo quando il link viene cliccato
            item.onClick?.();                       // Chiama la funzione onClick originale se esiste
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