import type { Meta, StoryObj } from "@storybook/react-vite";

import { Logo } from "../components/Logo/Logo";

const meta: Meta<typeof Logo> = {
    title: "Components/Logo",
    component: Logo,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Componente che visualizza il nome del brand in forma testuale, usato come logo."
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        text: { control: "text", description: "Contenuto testuale visualizzato come logo principale." }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { text: "My Brand" },
    render: ({ text }) => <Logo text={text} />,
};