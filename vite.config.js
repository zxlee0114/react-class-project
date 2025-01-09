import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 建議使用分開設定的方式： ? 產品路徑（npm run build）: 開發中路徑（npm run dev）
  base: process.env.NODE_ENV === "production" ? "/react-class-project/" : "/",
  plugins: [react()],
})
