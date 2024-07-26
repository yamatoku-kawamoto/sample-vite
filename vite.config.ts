import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginGlobInput from '@macropygia/vite-plugin-glob-input'

{ /*@ts-ignore */}
import handlebars from 'vite-plugin-handlebars'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      '@src': path.join(__dirname, 'src')
    }
  },
  plugins: [
    vitePluginGlobInput({
      patterns: [
        'src/**/[^_]*.html', // _で始まらないすべてのHTMLファイルを対象に
        'src/**/*.tsx',
        'src/**/*.ts',
      ]
    }),
    handlebars({
      partialDirectory: path.resolve(__dirname,'src/components/handlebars')
    }),
    react()
  ],
})
