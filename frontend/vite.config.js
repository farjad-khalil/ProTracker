import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://workouttrackerbackend-7nb918sn4-farjads-projects-4da592f0.vercel.app', // Proxy API requests to backend /change
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
