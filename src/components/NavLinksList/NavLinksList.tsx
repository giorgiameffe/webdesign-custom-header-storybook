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
    ariaLabel: string;
}

// Componente NavLinksList: rende una lista di link di navigazione
export const NavLinksList = ({ navItems, ariaLabel }: NavLinksListProps) => {

    return (
        // Elemento <nav> semantico per la navigazione
        <nav aria-label={ariaLabel}>
            {/* Lista non ordinata dei link */}
            <ul className="nav-items-list">
                {/* Mappa ogni link dell'array in un <li> contenente un NavLink */}
                {navItems.map((navItem, index) =>
                    <li key={index} >
                        {/* Spread delle props del singolo link su NavLink */}
                        <NavLink {...navItem} />
                    </li>
                )}
            </ul>
        </nav>
    )
}