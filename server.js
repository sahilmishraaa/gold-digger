import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { handleGetPrice, handlePostInvestment } from './handlers/routeHandlers.js'


const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

    if (!req.url.startsWith('/api'))
        return await serveStatic(req, res, __dirname) 
    else if(req.url === '/api/price' && req.method === 'GET')
        return await handleGetPrice(res)
    else if(req.url === '/api/invest' && req.method === 'POST')
        return await handlePostInvestment(req, res)
    else 
        return await serveStatic(req, res, __dirname)
}) 

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
 