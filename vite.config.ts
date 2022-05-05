import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let base = '/';

  if (command == 'build' && mode === 'gh-page') {
    base = '/frontend/';
  }

  return {
    plugins: [react()],
    base: base,
  }
})
