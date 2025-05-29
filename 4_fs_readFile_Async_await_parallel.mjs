// ; obligatorio luego del require porque sino cree que estamos ejecutando todo como uan sola cosa
import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
  console.log(text)
  console.log(text2)
})
