import React, { type ButtonHTMLAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import "../styles/colors.css";

// Metadati per Storybook
const meta: Meta = {
    title: 'Atoms/Colors', // Titolo della sezione nel pannello di Storybook
    tags: ['autodocs']     // Attiva la generazione automatica della documentazione
}

export default meta;

// Tipo alias per le storie basato sui metadati
type Story = StoryObj<typeof meta>;

// Componente pulsante riutilizzabile che copia un valore negli appunti
const ClickToCopy: React.FC<{ value: string } & ButtonHTMLAttributes<HTMLButtonElement>> = ({ value, ...attrs }) => {
    return (
        <button className='click-to-copy'
            {...attrs} // Propagazione di tutti gli attributi HTML passati al componente
            style={{ border: 'none', cursor: 'pointer', ...attrs.style }} // Stile base + override
            onClick={() => navigator.clipboard.writeText(value)} // Copia il valore passato al click
            aria-label={`Copy ${value}`} // Etichetta per screen reader (accessibilità)
        >
        </button>
    )
}

// Storia principale per visualizzare la palette di colori
export const Default: Story = {
    render: () =>
        <div>

            <h1>Colors - Natural Luxury Palette</h1>

            {/* --- GRIGI NATURALI --- */}
            <h3>Gray</h3>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-gray-${i})` }} // Sfondo colore grigio 
                        key={i}                                               // Chiave unica per React
                        value={`--color-gray-${i}`}                           // Valore da copiare
                    />
                ))}
            </div>

            {/* --- VERDI NATURALI --- */}
            <h3>Green</h3>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-green-${i})` }}  // Sfondo colore verde 
                        key={i}                                                 // Chiave unica per React
                        value={`--color-green-${i}`}                            // Valore da copiare
                    />
                ))}
            </div>

            {/* --- VIOLA E ACCENTI --- */}
            <h3>Violet</h3>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-purple-${i})` }}  // Sfondo colore viola i-esimo
                        key={i}                                                  // Chiave unica per React
                        value={`--color-purple-${i}`}                            // Valore da copiare
                    />
                ))}
            </div>
        </div>
}