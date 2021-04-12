/*
 ** Description :
 */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IncomingMessage, ServerResponse } from 'http'

export default (req: IncomingMessage, res: ServerResponse): any => {
  const body = 'hello worlddddd'
  if (req.method === 'GET')
    res
      .writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'application/json'
      })
      .end(JSON.stringify(body))
}
