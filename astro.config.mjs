import { defineConfig } from 'astro/config';

export default defineConfig({
  // Ajuste para o domínio definitivo antes da publicação (usado em canonical e Open Graph).
  site: 'https://www.modusolenergiasolar.com.br',
  server: { port: 4321 },
});
