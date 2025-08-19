// Importa il tipo ReactNode di React, utile per tipizzare elementi JSX, componenti o testo
import type { ReactNode } from 'react';

// Definizione delle props che il componente NavLink accetta
export type NavLinkProps = {
    href: string;        // URL di destinazione del link
    label: string;       // Testo visibile del link
    icon?: ReactNode;    // Icona opzionale da mostrare accanto al testo (può essere JSX, componente o immagine)
};

// Componente funzionale React che rappresenta un link di navigazione
export const NavLink = ({ href, label, icon }: NavLinkProps) => {

    return (
        // Elemento <a> che punta all'URL specificato da href
        <a href={href}>
            {/* Mostra l'icona solo se viene fornita */}
            {icon && <span>{icon}</span>}

            {/* Mostra il testo del link */}
            <span>{label}</span>
        </a>
    );
};
