const http = require('http');
const fs = require('fs');
//importa os modúlos http e fs(ler arquivos) para o servidor
const server = http.createServer((req,res)=>{
// createServer cria o servidor local (http://localhost:xxxxx)    
//criando uma função de requisição e respostas em http   
    if (req.url === '/') {
       //se for solicitado / vai abrir o arquivo index.html
        fs.readFile('index.html',(err,data)=>{
            if (err) {//caso de erro
                res.writeHead(500); //Mensagem de erro
                res.end("Erro Server");
                
            }else{//caso tudo ok
                res.writeHead(200);
                res.end(data);//retorna index.html
            }
        })

    } else if(req.url==="/sobre.html" ){
        fs.readFile('sobre.html',(err,data)=>{
            if (err) {//caso de erro
                res.writeHead(500); //Mensagem de erro
                res.end("Erro Server");
                
            }else{//caso tudo ok
                res.writeHead(200);
                res.end(data);//retorna index.html
            }
        })

    }
    else{//erro de página não encontrada
        res.writeHead(404); //erro padrão 404
        res.end("Página não encontrada"); // mensagem de erro
    }

});
server.listen(3000, ()=>{//define a porta de coneção do servidor
    console.log("Servidor Conectado na porta 3000");
})
