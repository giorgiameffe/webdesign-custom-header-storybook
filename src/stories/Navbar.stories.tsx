import type { Meta, StoryObj } from "@storybook/react-vite";

import { Navbar } from "../components/Navbar/Navbar";

import type { NavbarProps } from "../components/Navbar/Navbar";

const meta: Meta<typeof Navbar> = {

    title: "Components/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component:
                    "Componente organismo che rappresenta la barra di navigazione principale di un sito web. Contiene il logo nella parte sinistra e una lista di link di navigazione nella parte destra, per creare un menu orizzontale completo e facilmente personalizzabile. Utile per strutturare la navigazione principale del sito.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        logoText: {
            control: "text",
            description:
                "Testo visualizzato come logo nella sezione sinistra della Navbar. Rappresenta l’identità del brand e viene mostrato tramite il componente atomico `Logo`.",
        },
        links: {
            control: "object",
            description:
                "Array di oggetti `NavLinkProps` che definiscono i link posizionati a destra del logo. Ogni oggetto rappresenta un link singolo con `href`, `label` e un’icona opzionale `icon`. Ideale per costruire menu di navigazione chiari e organizzati.",
        },
    },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        logoText: "My Brand",
        links: [
            { href: "/home", label: "Home" },
            { href: "/shop", label: "Shop" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact Us" }
        ]
    },

    render: ({ logoText, links }: NavbarProps) => (
        <Navbar logoText={logoText} links={links} />
    )
}