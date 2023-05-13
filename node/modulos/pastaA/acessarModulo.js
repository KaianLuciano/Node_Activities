const moduloA = require('../moduloA')
console.log(moduloA.bomDia)

const c = require('./pastaB/pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req,res) => {
    res.write('Bom Dia')
    res.end()
}).listen(8080)