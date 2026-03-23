// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: 'https://rose1996iv.github.io',
  base: '/beaconacademy',
  integrations: [mdx(), sitemap(), react(), pagefind()],

  vite: {
    plugins: [tailwindcss()],
  },
  legacy: {
    collections: true
  }
});