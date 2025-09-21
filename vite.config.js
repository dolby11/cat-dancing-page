import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/cat-dancing-page/', // 여기에 저장소 이름을 넣어주세요
  plugins: [react()],
})
