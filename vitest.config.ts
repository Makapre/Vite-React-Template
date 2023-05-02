import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/test/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'istanbul',
      include: ['src/*'],
      reporter: ['json'],
    }
  }
})
