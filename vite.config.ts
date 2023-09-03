import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@config": `${path.resolve(__dirname, "./src/config/")}`,
      "@context": `${path.resolve(__dirname, "./src/context/")}`,
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@models": `${path.resolve(__dirname, "./src/models")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils")}`,
      "@public": `${path.resolve(__dirname, "./public/")}`,
    }
  }
})
