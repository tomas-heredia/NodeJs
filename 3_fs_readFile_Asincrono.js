const fs = require('node:fs')

console.log('leyendo el primer archivo... ')
fs.readFile('archivo.txt', 'utf-8', (err,text)=>{ //<--- ejecuta callback
    console.log(text)
})
console.log('mientras se lee...') //esto se puede ejecutar sin esperar


console.log('leyendo el segundo archivo... ')
fs.readFile('archivo2.txt', 'utf-8', (err,sceondText)=>{
    console.log(sceondText)
})