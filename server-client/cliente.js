const net = require('net');
const readline = require('readline');

// como se fosse o scanner do java, configuração para ler entrada do usuario no terminal.
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startClient(address, port) {
    const clientSocket = new net.Socket();

    //conexao com servidor
    clientSocket.connect(port, address, () => {
        console.log('Conectado ao servidor');
        //solicita uma mensagem
        r1.question('Digite uma Mensagem: ', (message) => {
            //envia mensagem ao servidor.
            clientSocket.write(message);
            clientSocket.end();
        })
    });

    clientSocket.on('end', () => {
        console.log('Desconectado do servidor');
        r1.close();
    });

    clientSocket.on('error', (err) => {
        console.error(`Erro no cliente: ${err}`);
    });
}

const DESTINATION = 'localhost';
const PORT = 6000;

startClient(DESTINATION, PORT);