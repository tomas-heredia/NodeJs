const os = require('node:os')

console.log('Informacion del sistema')
console.log('------------------------------')
console.log('nombre del sistema operativo: ' + os.platform())
console.log('version del sistema operativo: ' + os.release())
console.log('arquitectura: ' + os.arch())
console.log('CPUs: ' + os.cpus().length) // <-------- Permite escalar procesos en Node.js
console.log('memoria libre: ' + os.freemem() / 1024 / 1024 + 'MB')
console.log('memoria total: ' + os.totalmem() / 1024 / 1024 + 'MB')
console.log('uptime: ' + os.uptime() / 60 / 60 / 24 + 'dias')
