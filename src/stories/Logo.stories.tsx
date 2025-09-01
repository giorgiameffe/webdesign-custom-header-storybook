// Importa i tipi di Storybook per Vite
import type { Meta, StoryObj } from "@storybook/react-vite";

// Importa il componente Logo
import { Logo } from "../components/Logo/Logo";

// Configurazione principale del componente per Storybook
const meta: Meta<typeof Logo> = {

    title: "Components/Logo", // Titolo della sezione nella sidebar di Storybook
    component: Logo, // Componente a cui questa story si riferisce
    parameters: {
        layout: "centered", // Centra il componente nella preview
        docs: {
            description: {
                component: "Componente che visualizza il nome del brand in forma testuale, usato come logo."
                // Descrizione del componente per la documentazione
            }
        }
    },
    tags: ["autodocs"], // Tag per l’autogenerazione della documentazione
    argTypes: {
        text: {
            control: "text", // Mostra un controllo testuale nel pannello Controls
            description: "Contenuto testuale visualizzato come logo principale." // Descrizione della prop
        }
    }
};

// Esporta la configurazione a Storybook
export default meta;

// Definisce il tipo della story basata sul meta
type Story = StoryObj<typeof meta>;

// Story di default del componente Logo
export const Default: Story = {

    args: { text: "EcoÉclat" }, // Valore di default della prop 'text'

    render: ({ text }) => ( // Funzione che renderizza il componente con le props correnti

        <Logo text={text} />
    ),
};