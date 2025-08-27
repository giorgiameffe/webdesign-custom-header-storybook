// Importa i tipi di Storybook per Vite: Meta per la configurazione del componente, StoryObj per le singole stories
import type { Meta, StoryObj } from "@storybook/react-vite";

// Importa il componente Navbar
import { Navbar } from "../components/Navbar/Navbar";

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
        navItemsLeft: {
            // Mostra un campo "object" nei controlli di Storybook per permettere di inserire array di link
            control: "object",
            description: "Array di oggetti `NavLinkProps` che definiscono i link posizionati a sinistra del logo. Ogni oggetto rappresenta un link singolo con `href`, `label` e un’icona opzionale `icon`. Ideale per inserire sezioni principali del sito (es. Home, Shop..)."
        },
        navItemsRight: {
            // Anche qui un campo "object" nei controlli di Storybook
            control: "object",
            description: "Array di oggetti `NavLinkProps` che definiscono i link posizionati a destra del logo. Pensati per le azioni utente come Carrello, Wishlist, Profilo/Accesso. Ogni link può avere un’icona per migliorare l’usabilità."
        }
    },
};

// Esporta la configurazione a Storybook
export default meta;

// Definisce il tipo Story basato sul meta
type Story = StoryObj<typeof meta>;


// Story interattiva con toggle dei link selezionati
export const InteractiveNavbar: Story = {
    args: {
        logoText: "My Brand",
        navItemsLeft: [
            {
                label: "Home",
                onClick: () => console.log("Home clicked")
            },
            {
                label: "Shop",
                onClick: () => console.log("Shop clicked")
            },
            {
                label: "About Us",
                onClick: () => console.log("About Us clicked")
            },
        ],
        navItemsRight: [
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
        ],
    },
};