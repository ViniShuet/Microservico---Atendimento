const http = require('http')
const app = require('../src/app')
const port = parseInt(process.env.PORT, 10) || 3000 //configurando as portas (caso nao ache, va para a 3000)
const server = http.createServer(app) //variavel apra inicializar o servidor

//configurar a porta
server.listen(port)
server.on('listening', onListening);
console.log(`Api configurada na porta ${port}`)

//Config servidor
function onListening(){
    //Mostra a configuracao do endereco utilizado (IP, DNS etc)
    const addr = server.address();
    const bind = typeof add == 'string' ? 'pipe' + addr : 'port'  + addr.port;
    console.log(bind)
}