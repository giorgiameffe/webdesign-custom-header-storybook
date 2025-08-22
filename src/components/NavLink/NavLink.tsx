// Importazione il tipo ReactNode di React, utile per tipizzare elementi JSX, componenti o testo
import type { ReactNode } from 'react';

// Importazione NavLink css
import "./NavLink.css";

// Definizione delle props che il componente NavLink accetta
export type NavLinkProps = {
    label: string;        // Testo visibile del link (obbligatorio)
    icon?: ReactNode;     // Icona opzionale da mostrare accanto al testo
    arialabel?: string;   // Etichetta per l'accessibilità (aria-label)y
    onClick?: () => void; // Callback opzionale chiamata quando l'utente clicca sul link
};

// Componente funzionale React che rappresenta un link di navigazione
export const NavLink = ({ label, icon, arialabel, onClick }: NavLinkProps) => {

    return (
        // <button> viene usato per gestire l'interazione tramite click come azione
        <button
            aria-label={arialabel} // Attributo per l'accessibilità: descrive il contenuto del bottone
            onClick={onClick}       // Callback chiamata quando l'utente clicca sul bottone
            className='nav-item'
        >
            {/* Mostra l'icona solo se viene fornita */}
            {icon && <span>{icon}</span>}

            {/* Mostra il testo del link */}
            <span>{label}</span>
        </button>
    );
};
