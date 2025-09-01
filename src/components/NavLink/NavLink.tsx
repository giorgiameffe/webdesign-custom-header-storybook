// Import del tipo ReactNode per la prop icon
import type { ReactNode } from 'react';

// Import del CSS specifico per NavLink
import "./NavLink.css";

// Tipizzazione delle props del componente NavLink
export type NavLinkProps = {
    label: string;                // Testo visibile del link
    icon?: ReactNode;             // Icona opzionale da mostrare accanto al testo
    ariaLabel?: string;           // Etichetta ARIA per accessibilità (fallback sul label)
    onClick?: () => void;         // Callback quando si clicca sul link
    selected?: boolean;           // Indica se il link è attivo/selezionato
    hideTextOnMobile?: boolean;   // Nasconde testo su dispositivi mobili (mostra solo icona)
};

// Componente NavLink
export const NavLink = ({
    label,
    icon,
    ariaLabel,
    onClick,
    selected,
    hideTextOnMobile = false, // Default: mostra sempre il testo
}: NavLinkProps) => {
    return (
        // Pulsante principale del link
        <button
            className={`nav-item ${selected ? "nav-item-selected" : ""}`} // Aggiunge classe se selezionato
            onClick={onClick}                                             // Callback click
            aria-label={ariaLabel || label}                                // Etichetta ARIA per accessibilità
        >
            {/* Mostra icona se presente */}
            {icon && <span className="nav-icon">{icon}</span>}

            {/* Mostra testo solo se hideTextOnMobile è false */}
            {label && !hideTextOnMobile && <span>{label}</span>}
        </button>
    );
};