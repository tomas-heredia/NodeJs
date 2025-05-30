const http = require('node:http')
const { findAvalabePort } = require('./10_free_port.js')

const desiredPort = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
  console.log('reques recivida')
  res.end('hola mundo')
})

findAvalabePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`escuchando desde el puerto http://localhost:${port}`)
  })
})
