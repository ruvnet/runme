# Configuration Documentation

This document provides detailed instructions for configuring ViteJS, Tailwind, and NodeJS UI for the Runme CLI tool.

## ViteJS Configuration

1. Install ViteJS:

   ```bash
   npm install vite
   ```

2. Create a `vite.config.js` file in the root of your project:

   ```javascript
   import { defineConfig } from 'vite';
   import vue from '@vitejs/plugin-vue';

   export default defineConfig({
     plugins: [vue()],
     server: {
       port: 3000,
     },
     resolve: {
       alias: {
         '@': '/src_ui',
       },
     },
   });
   ```

## Tailwind CSS Configuration

1. Install Tailwind CSS and its dependencies:

   ```bash
   npm install tailwindcss autoprefixer
   ```

2. Create a `tailwind.config.js` file in the root of your project:

   ```javascript
   module.exports = {
     purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Create a `postcss.config.js` file in the root of your project:

   ```javascript
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   };
   ```

4. Add the following lines to your `index.html` file to include Tailwind CSS:

   ```html
   <link href="/dist/output.css" rel="stylesheet">
   ```

## NodeJS UI Configuration

1. Create a `package.json` file in the root of your project:

   ```json
   {
     "name": "runme-ui",
     "version": "1.0.0",
     "description": "UI for the Runme CLI tool",
     "main": "main.js",
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "serve": "vite preview"
     },
     "dependencies": {
       "vue": "^3.0.0"
     },
     "devDependencies": {
       "vite": "^2.0.0",
       "tailwindcss": "^2.0.0",
       "autoprefixer": "^10.0.0",
       "@vitejs/plugin-vue": "^1.0.0"
     }
   }
   ```

2. Create a `main.js` file in the root of your project:

   ```javascript
   import { createApp } from 'vue';
   import App from './src/App.vue';
   import './index.css';

   createApp(App).mount('#app');
   ```

3. Create an `index.html` file in the root of your project:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Runme UI</title>
     <link href="/dist/output.css" rel="stylesheet">
   </head>
   <body>
     <div id="app"></div>
     <script type="module" src="/src/main.js"></script>
   </body>
   </html>
   ```

## Running the Project

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Preview the build:

   ```bash
   npm run serve
   ```

For any issues or questions, refer to the official documentation of [ViteJS](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Vue.js](https://vuejs.org/).
