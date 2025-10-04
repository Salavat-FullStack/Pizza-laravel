import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/nav.css', 'resources/js/nav.js', 'resources/css/filtr.block.css','resources/css/main.css','resources/js/filter.block.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
});
