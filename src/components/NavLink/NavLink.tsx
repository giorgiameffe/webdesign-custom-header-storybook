import type { ReactNode } from 'react';
import "./NavLink.css";

export type NavLinkProps = {
    label: string;                // Testo visibile del link
    icon?: ReactNode;             // Icona opzionale
    ariaLabel?: string;           // Etichetta ARIA per accessibilità
    onClick?: () => void;
    selected?: boolean;
    hideTextOnMobile?: boolean;   // Nasconde testo su mobile
};

export const NavLink = ({
    label,
    icon,
    ariaLabel,
    onClick,
    selected,
    hideTextOnMobile = false,
}: NavLinkProps) => {
    return (
        <button
            className={`nav-item ${selected ? "nav-item-selected" : ""}`}
            onClick={onClick}
            aria-label={ariaLabel || label} // Usa aria-label o fallback sul label
        >
            {/* Icona */}
            {icon && <span className="nav-icon">{icon}</span>}

            {/* Testo visibile solo se hideTextOnMobile è false */}
            {label && !hideTextOnMobile && <span>{label}</span>}
        </button>
    );
};