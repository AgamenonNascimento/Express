const express = require("express");//Importando epress
const app = express();//inicalizando  o express

app.get("/", function(req, res){
  res.send("<h1>Bem vindo ao Guia do Programador</h1>");
});

app.get("/Blog", function(req, res){
  res.send("Bem vindo ao Meu Blog");
});

app.get("/Canal", function(req, res){
  res.send("Bem vindo ao Meu Canal");
});



app.listen(4000, function (erro) {
  if(erro){
    console.log("Aconteceu um erro!");
  }else{
    console.log("Servidor Inicializado com Sucesso!");
  }
} );