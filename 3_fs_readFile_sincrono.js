const fs = require('node:fs')

console.log('leyendo el primer archivo... ')
const text = fs.readFileSync('archivo.txt', 'utf-8')
console.log('mientras se lee...') //devido a que es sincromo, la ejecucion se detiene hasta terminar de leer todo el archivo
console.log(text)

console.log('leyendo el segundo archivo... ')
const sceondText = fs.readFileSync('archivo2.txt', 'utf-8')

console.log(sceondText)