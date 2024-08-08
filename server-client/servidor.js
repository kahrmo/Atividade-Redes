//importação de um módulo Node.Js. 'net' é um modulo para tcp
const net = require('net')

//startando server
function startServer(address, port) {
    const server = net.createServer((clientSocket) => {
        console.log('Cliente conectado: ', clientSocket.remoteAddress, clientSocket.remotePort);

        clientSocket.on('data', (data) => {
            console.log(`Mensagem: ${data.toString()}`);
        });
        
        clientSocket.on('end', () => {
            console.log('Cliente desconectado');
        });
    });

    server.listen(port, address, () => {
        console.log(`Servidor rodando em ${address}:${port}`);
    });

    server.on('error', (err) => {
        console.error(`Erro no servidor ${err}`);
    });
}

const HOST = 'localhost';
const PORT = 6000;

startServer(HOST,PORT);