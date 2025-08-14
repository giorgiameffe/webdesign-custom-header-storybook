import type { Preview } from '@storybook/react-vite';

// Importa il file di reset CSS per azzerare gli stili di default del browser
import "../src/styles/reset.css";

// Importa le variabili CSS (es. spacing, colori, ecc.)
import "../src/styles/variables.css";

// Importa il file di tipografia (font, pesi, dimensioni testo, ecc.)
import "../src/styles/typography.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;