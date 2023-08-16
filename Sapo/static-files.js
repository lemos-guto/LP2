//importar o express
const express = require('express');
const path = require('path')

//criar um app ou server chamando a função express()
const app = express();

//middleware - static files
app.use(express.static('public'));

function home(req, res){
    const caminho = path.join(__dirname, 'pages', 'home.html');
    res.sendFile(caminho);
}

//localhost:3001/contato?tipo=formulario
//localhost:3001/contato?tipo=texto
//localhost:3001/contato -> texto
function contato(req, res){
    const tipo = req.query.tipo;
    if (tipo === 'formulario'){
        res.sendFile(path.join(__dirname, 'pages', 'contato-form.html'));
    } else{
        res.sendFile(path.join(__dirname, 'pages', 'contato-texto.html'))
    }
}

const produtos = [
    'uva', 'melão', 'óculos', 'vaca'
];
function produto(req, res){
    const id = req.query.id;
    if(id >= produtos.length || id < 0){
        res.status(404);
        res.send('Não existe um produto com esse ID.');
        return;
    }
    res.send(produtos[id]);
}
//https://paletadecores.com/paleta/f0f0d8/b4debe/77cca4/666666/b4df37/ -> palheta bonita!
//configurar rotas
app.get('/', home);
app.get('/contato', contato)
app.get('/produto', produto)

//subir o server chamando a função listen()
app.listen(3000, () => console.log('Rodando na porta 69!'));