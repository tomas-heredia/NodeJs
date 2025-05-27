//mostrar el directorio
const { error } = require('node:console')
const fs = require('node:fs')

fs.readdir('.',(err,files)=>{
    if (err) {
        console.error('error de directorio: ',err)
        return
    }
    files.forEach(file => {
        console.log(file);
        
    })
})