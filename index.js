const express = require("express"); // Importar o express
const app = express(); // Iniciar o express

app.get("/",function(req,res){
    res.send("<h1>Bem vindo ao NODEjs</h1>");
});

app.get("/blog",function(req,res){
    res.send("<h1>Bem vindo ao BLOG</h1>");
});

app.get("/canal/youtube",function(req,res){
    res.send("<h1>Bem vindo ao CANAL de YOUTUBE</h1>");
});

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})