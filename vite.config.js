import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: "./src",
    build: {
        outDir: "../docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "./src/index.html"),
                registro: resolve(__dirname, "./src/registrarse.html"),
            },
        },
    },
    base: "./",
});