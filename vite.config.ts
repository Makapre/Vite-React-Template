import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4711
  },
  preview: {
    host: '0.0.0.0',
    port: 4712,
  },
  test: {
    include: ['src/test/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'istanbul',
      include: ['src/*'],
      reporter: ['json'],
    }
  }
})
