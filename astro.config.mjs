import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    functionPerRoute: true,
    // includeFiles: ['./src/utils/**/*'],
  }),
})
