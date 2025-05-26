const fs = require('node:fs/promises')
const { text } = require('node:stream/consumers')

console.log('leyendo el primer archivo... ')
fs.readFile('archivo.txt', 'utf-8')
    .then(text =>{
        console.log('primer texto: '+text)
    })
console.log('mientras se lee...') //esto se puede ejecutar sin esperar


console.log('leyendo el segundo archivo... ')
fs.readFile('archivo2.txt', 'utf-8')
    .then(text =>{
        console.log('segundo texto: '+text)
    })