// Importa i tipi di Storybook per Vite: Meta per la configurazione del componente, StoryObj per le singole stories
import type { Meta, StoryObj } from "@storybook/react-vite";

// Importa il componente NavLinksList
import { NavLinksList } from "../components/NavLinksList/NavLinksList";

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
        navItems: {
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
        ariaLabel: "Main Navigation",
        navItems: [
            {
                label: "Home",                                        // Primo link della lista
                onClick: () => console.log("Home clicked"),
            },
            {
                label: "Shop",                                        // Secondo link della lista
                onClick: () => console.log("Shop clicked")
            },
            {
                label: "About Us",                                    // Terzo link della lista
                onClick: () => console.log("About Us clicked")
            },
            {
                label: "Cart",
                onClick: () => console.log("Cart clicked")
            },
            {
                label: "Wishlist",
                onClick: () => console.log("Wishlist clicked")
            },
            {
                label: "User",
                onClick: () => console.log("User clicked")
            }
        ]
    },
};

// Story del NavLinksList Selected
export const Selected: Story = {
    args: {
        navItems: [
            {
                label: "Home",                                        // Primo link della lista
                onClick: () => console.log("Home clicked"),
                selected: true
            },
            {
                label: "Shop",                                        // Secondo link della lista
                onClick: () => console.log("Shop clicked")
            },
            {
                label: "About Us",                                    // Terzo link della lista
                onClick: () => console.log("About Us clicked")
            },
            {
                label: "Cart",
                onClick: () => console.log("Cart clicked")
            },
            {
                label: "Wishlist",
                onClick: () => console.log("Wishlist clicked")
            },
            {
                label: "User",
                onClick: () => console.log("User clicked")
            },
        ]
    },
};