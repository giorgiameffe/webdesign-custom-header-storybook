// Importa i tipi di Storybook per Vite: Meta per la configurazione del componente, StoryObj per le singole stories
import type { Meta, StoryObj } from "@storybook/react-vite";

// Importa il componente NavLink
import { NavLink } from "../components/NavLink/NavLink";

import { Icon } from "../components/Icon/Icon";

import { faUser } from "@fortawesome/free-solid-svg-icons";



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
        label: {
            control: "text",
            description: "Testo visibile all'interno del link." // Descrizione della prop label
        },
        ariaLabel: {
            control: "text",
            description: "Etichetta per l'accessibilità da usare quando il testo visibile non è sufficiente (es. solo icona)."
        },
        icon: {
            control: false, // Non mostrare controllo per l'icona (JSX/ReactNode non è modificabile facilmente nei controls)
            description: "Icona opzionale visualizzata accanto al testo del link." // Descrizione della prop icon
        },
        onClick: {
            action: "clicked",
            // Qui non si usa `control: "action"` perché Storybook non riconosce "action" come tipo di controllo.
            description: "Funzione chiamata quando l'utente esegue un click." // Descrizione della prop onClick
        },
        selected: {
            control: 'boolean',
            description: "Stato di selezione del link."
        }
    }
};

// Esporta la configurazione a Storybook
export default meta;

// Definisce il tipo Story basato sul meta
type Story = StoryObj<typeof meta>;


// Story di Default del NavLink
export const Default: Story = {
    args: {
        label: "Accedi",  // Valore di default della prop label
        selected: false,
        ariaLabel: "Profilo Utente"
    },
};


// Story del NavLink Selected
export const Selected: Story = {
    args: {
        label: "Accedi",  // Valore di default della prop label
        selected: true, // Stato Selected
        ariaLabel: "Profilo Utente"
    },
};

// Story del NavLink con l'icona (testo + icona)
export const WithIcon: Story = {

    args: {
        label: "Accedi",
        selected: false,
        ariaLabel: "Profilo Utente",
        icon: <Icon icon={faUser} />
    },
};

// Story del NavLink solo con l'icona
export const IconOnly: Story = {

    args: {
        icon: <Icon icon={faUser} size="1.5rem" />,
        ariaLabel: "Profilo utente",
        selected: false
    },
};