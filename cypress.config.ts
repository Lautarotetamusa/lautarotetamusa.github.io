import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    supportFile: 'cypress/support/e2e.ts', 
    specPattern: 'cypress/e2e/**/*.spec.ts',  // Ruta a los archivos de prueba
  },
});