// Import dei tipi di FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

// Definisce il tipo delle props che il componente Icon si aspetta
export type IconProps = {
    icon: IconProp;       // icona da FontAwesome
    ariaLabel?: string;   // per accessibilità
}

// Componente Icon che mostra un'icona 
export const Icon = ({ icon, ariaLabel }: IconProps) => {
    return (
        <FontAwesomeIcon
            icon={icon}
            aria-label={ariaLabel}
        />
    );
}
