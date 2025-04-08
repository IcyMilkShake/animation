import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // Update based on your project structure
    },
  },
  server: {
    open: true,
  },
  build: {
    target: 'esnext', // ensure compatibility with modern browsers
  },
});
