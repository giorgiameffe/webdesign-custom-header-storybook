// Importa i tipi di Storybook per Vite
import type { Meta, StoryObj } from "@storybook/react-vite";

// Importa il componente Icon
import { Icon } from "../components/Icon/Icon";

// Importa l’icona user da FontAwesome
import { faUser } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Icon> = {
    title: "Components/Icon",
    component: Icon,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Componente che mostra un'icona tramite FontAwesome, con supporto ad aria-label per accessibilità."
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        ariaLabel: {
            control: "text",
            description: "Etichetta ARIA opzionale per descrivere l'icona."
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story con icona user
export const Default: Story = {
    args: {
        icon: faUser,
        ariaLabel: "Icona User"
    }
};
