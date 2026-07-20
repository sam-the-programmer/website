// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import solidJs from "@astrojs/solid-js";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [solidJs()],
    adapter: cloudflare(),

    vite: {
        plugins: [tailwindcss()],
    },

    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Prata",
            cssVariable: "--font-display",
        },
    ],
});
