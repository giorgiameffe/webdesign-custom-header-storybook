// Importa i tipi di Storybook per Vite: Meta per la configurazione del componente, StoryObj per le singole stories
import type { Meta, StoryObj } from "@storybook/react-vite";

// Importa il componente NavLinksList
import { NavLinksList } from "../components/NavLinksList/NavLinksList";

// Importa il tipo delle props del componente
import type { NavLinksListProps } from "../components/NavLinksList/NavLinksList";

// Configurazione principale del componente per Storybook
const meta: Meta<typeof NavLinksList> = {

    title: "Components/NavLinksList", // Titolo della sezione nella sidebar di Storybook
    component: NavLinksList, // Componente a cui questa story si riferisce
    parameters: {
        layout: "centered", // Centra il componente nella preview
        docs: {
            description: {
                component: "Componente di tipo molecola che rende una lista di link di navigazione. Ogni voce della lista utilizza il componente atomico `NavLink`. Utile per creare menu orizzontali o verticali all’interno di una Navbar."
                // Descrizione del componente nella documentazione
            }
        }
    },
    tags: ['autodocs'], // Tag per generazione automatica della documentazione
    argTypes: {
        links: {
            control: "object", // Mostra un campo oggetto nei controlli di Storybook
            description: "Lista di oggetti `NavLinkProps`. Ogni elemento rappresenta un link con `href`, `label` e opzionalmente `icon`."
            // Descrizione della prop links
        }
    }
};

// Esporta la configurazione a Storybook
export default meta;

// Definisce il tipo Story basato sul meta
type Story = StoryObj<typeof meta>;

// Story di default del NavLinksList
export const Default: Story = {
    args: {
        links: [
            { href: "/home", label: "Home" },      // Primo link della lista
            { href: "/shop", label: "Shop" },      // Secondo link della lista
            { href: "/about", label: "About Us" }, // Terzo link della lista
            { href: "/contact", label: "Contact Us" } // Quarto link della lista
        ]
    },

    // Renderizza il componente con le props correnti
    render: ({ links }: NavLinksListProps) => (
        <NavLinksList links={links} />
    )
};
