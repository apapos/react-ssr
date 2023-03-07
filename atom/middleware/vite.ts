import { createServer as createViteServer } from 'vite'

export const createServer = async () => {
    // 并让上级服务器接管控制
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom'
    })
    return vite
}