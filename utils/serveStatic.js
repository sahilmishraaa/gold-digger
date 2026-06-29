import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'
import fs from 'node:fs/promises'
import path from 'node:path'

export async function serveStatic(req, res, dir){
    const pathPublic = path.join(dir, 'public')
    const filePath = path.join(
        pathPublic,
        req.url === '/' ? "index.html" : req.url)
    const ext = path.extname(filePath)
    const contentType = getContentType(ext)
    try{
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, content)
    }
    catch(err){
        if(err.code === 'ENOENT')
        {
            const  errorPage = path.join(pathPublic, '404.html')
            const errPath = await fs.readFile(errorPage)
            sendResponse(res, 404, 'text/html', errPath)
        }
        else{
            sendResponse(res, 500, 'text/html', `<html><h1>Server Error: ${err.code}</h1></html>`)
        }
    }
}