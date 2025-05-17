import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude,
        'e2e/**'
      ],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        exclude: [
          'nightwatch.conf.cjs',
          'src/main.ts',
          'src/router/index.ts',
          'src/types/**',
          'src/config/**',
          'tests/**',
          'nightwatch/**',
          'env.d.ts',
          'vite.config.ts',
          'vitest.config.ts',
          'eslint.config.ts'
        ]
      }
    }
  })
)
