// Importa i tipi di Storybook per Vite: Meta per la configurazione del componente, StoryObj per le singole stories
import type { Meta, StoryObj } from "@storybook/react-vite";

// Importa il componente Navbar
import { Navbar } from "../components/Navbar/Navbar";

// Importa il tipo delle props del componente Navbar
import type { NavbarProps } from "../components/Navbar/Navbar";

// Configurazione principale del componente per Storybook
const meta: Meta<typeof Navbar> = {

    title: "Components/Navbar", // Titolo della sezione nella sidebar di Storybook
    component: Navbar, // Componente a cui questa story si riferisce
    parameters: {
        layout: "fullscreen", // La preview occuperà l'intera finestra
        docs: {
            description: {
                component: "Componente organismo che rappresenta la barra di navigazione principale di un sito web. Contiene il logo nella parte sinistra e una lista di link di navigazione nella parte destra, per creare un menu orizzontale completo e facilmente personalizzabile. Utile per strutturare la navigazione principale del sito."
                // Descrizione del componente nella documentazione
            }
        }
    },
    tags: ["autodocs"], // Tag per generazione automatica della documentazione
    argTypes: {
        logoText: {
            control: "text", // Mostra un campo di testo nei controlli di Storybook
            description: "Testo visualizzato come logo nella sezione sinistra della Navbar. Rappresenta l’identità del brand e viene mostrato tramite il componente atomico `Logo`."
            // Descrizione della prop logoText
        },
        links: {
            control: "object", // Mostra un campo oggetto nei controlli di Storybook
            description: "Array di oggetti `NavLinkProps` che definiscono i link posizionati a destra del logo. Ogni oggetto rappresenta un link singolo con `href`, `label` e un’icona opzionale `icon`. Ideale per costruire menu di navigazione chiari e organizzati."
            // Descrizione della prop links
        }
    }
};

// Esporta la configurazione a Storybook
export default meta;

// Definisce il tipo Story basato sul meta
type Story = StoryObj<typeof meta>;

// Story di default della Navbar
export const Default: Story = {
    args: {
        logoText: "My Brand", // Testo di default del logo
        links: [
            { label: "Home", onClick: () => console.log("Home clicked") },            // Primo link della lista
            { label: "Shop", onClick: () => console.log("Shop clicked") },            // Secondo link della lista
            { label: "About Us", onClick: () => console.log("About Us clicked") },    // Terzo link della lista
            { label: "Contact Us", onClick: () => console.log("Contact Us clicked") } // Quarto link della lista
        ]
    },

    // Renderizza il componente con le props correnti
    render: ({ logoText, links }: NavbarProps) => (
        <Navbar logoText={logoText} links={links} />
    )
};