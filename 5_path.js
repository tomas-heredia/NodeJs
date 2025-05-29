const path = require('node:path')

// cada sistema opertativo usa un tipo distinto de barra para separar, en unix es / en windows es \
// obtener el tipo de barra:
console.log(path.sep)

// unir rutas
// le paso cada parte de la ruta y genera el path segun el SO
const ruta = path.join('content', 'subfolder', 'test.txt')
console.log(ruta)

// nombre del fichero
const base = path.basename('/content/subfolder/test.txt')
console.log(base)
// quitando extencion
const base2 = path.basename('/content/subfolder/test.txt', '.txt')
console.log(base2)

// obtener extencion
const extName = path.extname('/content/subfolder/test.txt')
console.log(extName)
