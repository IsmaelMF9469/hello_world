"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 2000;
app.get('/', function (request, response) {
    response.send(' Hello world ');
});
app.get('/BSM', function (request, response) {
    response.send(' Mentalidades: orientação ao futuro,persistencia,responsabilidade pessoal, mentalidade de crescimento. <br> Habilidade: trabalho em equipe,atenção aos detalhes, proatividade, comunicação');
});
app.get('/BSM/Semana', function (request, response) {
    response.send(' Banco de dados, Node js');
});
app.listen(port, function () {
    console.log(" server is running at port ".concat(port, " "));
});
