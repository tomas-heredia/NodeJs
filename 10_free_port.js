const { error } = require('node:console')
const net = require('node:net')

function findAvalabePort (desierPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desierPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvalabePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvalabePort }
