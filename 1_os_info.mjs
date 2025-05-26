import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log("Informacion del sistema")
console.log("------------------------------")
console.log("nombre del sistema operativo: "+platform())
console.log("version del sistema operativo: "+release())
console.log("arquitectura: "+arch())
console.log("CPUs: "+cpus().length) //<-------- Permite escalar procesos en Node.js
console.log("memoria libre: "+freemem()/1024/1024 +"MB") 
console.log("memoria total: "+totalmem() /1024/1024 +"MB")
console.log("uptime: "+uptime() /60/60/24 +"dias")