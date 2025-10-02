// Importa i tipi di Storybook per Vite
import type { Meta, StoryObj } from "@storybook/react-vite";

// Importa il componente Icon
import { Icon } from "../components/Icon/Icon";

// Importa l’icona user da FontAwesome
import { faUser, faShoppingBag, faHeart } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Icon> = {
    title: "Components/Atoms/Icon",
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
        },
        size: {
            control: "text",
            description: "Imposta la dimensione dell'icona (valore CSS valido, es. '24px', '1.5rem')"
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story con tutte e 3 le icone
export const AllIcons: Story = {

    render: () => (

        <div style={{ display: "flex", gap: "2rem", fontSize: "1.5rem" }}>
            <Icon icon={faUser} ariaLabel="Icona Utente" />
            <Icon icon={faShoppingBag} ariaLabel="Icona Carrello" />
            <Icon icon={faHeart} ariaLabel="Icona Wishlist" />
        </div>
    )
};

// Story con icona Wishlist
export const WishlistIcon: Story = {

    args: {
        icon: faHeart,
        ariaLabel: "Icona Wishlist",
        size: "1.5rem"
    }
};

// Story con icona Shopping Bag
export const ShoppingBagIcon: Story = {
    args: {
        icon: faShoppingBag,
        ariaLabel: "Icona Carrello",
        size: "1.5rem"
    }
};

// Story con icona User
export const UserIcon: Story = {
    args: {
        icon: faUser,
        ariaLabel: "Icona Utente",
        size: "1.5rem",
    }
};
