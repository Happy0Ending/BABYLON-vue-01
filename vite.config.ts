import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    hmr:true,
    cors:true,
    open:'index.html',
    
  },
  plugins: [vue()
  ]
})
