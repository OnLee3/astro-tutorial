import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://main--splendid-kashata-0e245a.netlify.app/",
  integrations: [preact()]
});