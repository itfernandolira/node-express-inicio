const express = require("express"); // Importar o express
const app = express(); // Iniciar o express

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})