import { defineConfig, presetIcons, presetUno } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  presets: [presetUno(), presetIcons()],
  transformers: [transformerVariantGroup()],
});
