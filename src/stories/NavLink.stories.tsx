// Importa i tipi di Storybook per Vite: Meta per la configurazione del componente, StoryObj per le singole stories
import type { Meta, StoryObj } from "@storybook/react-vite";

// Importa il componente NavLink
import { NavLink } from "../components/NavLink/NavLink";

// Importa il tipo delle props del componente
import type { NavLinkProps } from "../components/NavLink/NavLink";

// Configurazione principale del componente per Storybook
const meta: Meta<typeof NavLink> = {

    title: "Components/NavLink", // Titolo della sezione nella sidebar di Storybook
    component: NavLink, // Componente a cui questa story si riferisce
    parameters: {
        layout: "centered", // Centra il componente nella preview
        docs: {
            description: {
                component: "Componente atomico che rappresenta un link di navigazione, con testo obbligatorio e icona opzionale."
                // Descrizione del componente nella documentazione
            }
        }
    },
    tags: ['autodocs'], // Tag per generazione automatica della documentazione
    argTypes: {
        href: {
            control: "text", // Mostra un campo di testo nei controlli di Storybook
            description: "URL di destinazione del link." // Descrizione della prop href
        },
        label: {
            control: "text",
            description: "Testo visibile all'interno del link." // Descrizione della prop label
        },
        icon: {
            control: false, // Non mostrare controllo per l'icona (JSX/ReactNode non è modificabile facilmente nei controls)
            description: "Icona opzionale visualizzata accanto al testo del link." // Descrizione della prop icon
        }
    }
};

// Esporta la configurazione a Storybook
export default meta;

// Definisce il tipo Story basato sul meta
type Story = StoryObj<typeof meta>;

// Story di default del NavLink
export const Default: Story = {
    args: {
        href: "/home", // Valore di default della prop href
        label: "Home"  // Valore di default della prop label
    },

    // Renderizza il componente con le props correnti
    render: ({ href, label }: NavLinkProps) => (
        <NavLink href={href} label={label} />
    )
};