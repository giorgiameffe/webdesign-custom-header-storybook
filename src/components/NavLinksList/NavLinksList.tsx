// Importa il componente atomico NavLink
import { NavLink } from "../NavLink/NavLink";

// Importa il tipo delle props del componente NavLink
import type { NavLinkProps } from "../NavLink/NavLink";

// Definizione delle props di NavLinksList
export type NavLinksListProps = {
    // Array di oggetti NavLinkProps, ogni oggetto rappresenta un link
    links: NavLinkProps[];
}

// Componente NavLinksList: rende una lista di link di navigazione
export const NavLinksList = ({ links }: NavLinksListProps) => {

    return (
        // Elemento <nav> semantico per la navigazione
        <nav>
            {/* Lista non ordinata dei link */}
            <ul>
                {/* Mappa ogni link dell'array in un <li> contenente un NavLink */}
                {links.map((link, index) =>
                    <li key={index}>
                        {/* Spread delle props del singolo link su NavLink */}
                        <NavLink {...link} />
                    </li>
                )}
            </ul>
        </nav>
    )
}