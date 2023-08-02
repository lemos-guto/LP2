const express = require("express");

const app = express();

function home(req, res){
    console.log(req.method);
    console.log(req.url);
    res.status(200);
    res.send("Home Page");
}

function contato (req, res){
    res.send("<h2>Contato</h2>");
}

function redirect(req, res){
    res.status(301);
    res.header("Location", "/contato");
    res.send();
}

//roteamento
app.get("/", home);
app.get("/contato", contato);
app.get("/redirect", redirect)

app.listen(3000, () => console.log("Rodando na porta 3000"));