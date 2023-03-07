import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        minify: false,
    },
    resolve: {
        alias: {
            "@atom": path.join(__dirname, '/atom'),
            "@client": path.join(__dirname, '/client')
        }
    }
})
