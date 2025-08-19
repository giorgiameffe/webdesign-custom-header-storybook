import type { Meta, StoryObj } from "@storybook/react-vite";

import { NavLink } from "../components/NavLink/NavLink";

import type { NavLinkProps } from "../components/NavLink/NavLink";

const meta: Meta<typeof NavLink> = {
    title: "Components/NavLink",
    component: NavLink,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Componente atomico che rappresenta un link di navigazione, con testo obbligatorio e icona opzionale."
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        href: {
            control: "text",
            description: "URL di destinazione del link."
        },
        label: {
            control: "text",
            description: "Testo visibile all'interno del link."
        },
        icon: {
            control: false,
            description: "Icona opzionale visualizzata accanto al testo del link."
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: "/products",
        label: "Products"
    },

    render: ({ href, label }: NavLinkProps) => (

        <NavLink href={href} label={label} />
    )
}