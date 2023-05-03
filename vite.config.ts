import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/test/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'istanbul',
      include: ['src/*'],
      reporter: ['json'],
    }
  }
})
