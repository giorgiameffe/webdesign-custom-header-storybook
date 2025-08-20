import type { Meta, StoryObj } from "@storybook/react-vite";

import { NavLinksList } from "../components/NavLinksList/NavLinksList";

import type { NavLinksListProps } from "../components/NavLinksList/NavLinksList";

const meta: Meta<typeof NavLinksList> = {

    title: "Components/NavLinksList",
    component: NavLinksList,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "Componente di tipo molecola che rende una lista di link di navigazione. Ogni voce della lista utilizza il componente atomico `NavLink`. Utile per creare menu orizzontali o verticali all’interno di una Navbar.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        links: {
            control: "object",
            description:
                "Lista di oggetti `NavLinkProps`. Ogni elemento rappresenta un link con `href`, `label` e opzionalmente `icon`.",
        },
    },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        links: [
            { href: "/home", label: "Home" },
            { href: "/shop", label: "Shop" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact" },
        ]
    },

    render: ({ links }: NavLinksListProps) => (
        <NavLinksList links={links} />
    )
}