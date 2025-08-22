// Definisce il tipo delle props che il componente Logo si aspetta
export type LogoProps = {
    // `text` è la stringa da visualizzare come logo
    text: string;
}

// Componente funzionale React che mostra un logo testuale
export const Logo = ({ text }: LogoProps) => {
    // Ritorna un elemento <div> contenente il testo del logo
    return (
        <div id="logo-text">{text}</div>
    )
}