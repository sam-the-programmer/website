// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import solidJs from "@astrojs/solid-js";

// import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [solidJs()],
    // adapter: cloudflare(),

    output: "static",

    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@assets": "src/assets",
                "@components": "src/components",
                "@layouts": "src/layouts",
                "@styles": "src/styles",
                "@utils": "src/utils",
            },
        },
    },

    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Geist Mono",
            cssVariable: "--font-base",
        },
    ],
});
