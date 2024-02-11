// @ts-ignore
import { fileURLToPath, URL } from "node:url";
// @ts-ignore
import { createRequire } from "node:module";
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import checker from "vite-plugin-checker";
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ckeditor5({
      theme: require.resolve("@ckeditor/ckeditor5-theme-lark"),
    }),
    vue({
      script: {
        propsDestructure: true,
      },
    }),
    checker({
      vueTsc: true,
    }),
  ],
  resolve: {
    // extensions: [".js", ".ts", ".vue", ".json"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
