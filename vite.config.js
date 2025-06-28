import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // <-- Allows access from your local network (Wi-Fi)
    port: 5173        // <-- Optional: can be any port, just stay consistent
  }
});
