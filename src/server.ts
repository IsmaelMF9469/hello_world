import * as express  from "express";

const app = express();
const port = 2000

app.get('/', (request,response) =>{
    response.send(' Hello world ')
});

app.get('/BSM', (request,response) =>{
    response.send(' Mentalidades: orientação ao futuro,persistencia,responsabilidade pessoal, mentalidade de crescimento. <br> Habilidade: trabalho em equipe,atenção aos detalhes, proatividade, comunicação')
});

app.get('/BSM/Semana', (request,response) => {
     response.send(' Banco de dados, Node js')
});

app.listen(port, () => {
    console.log(` server is running at port ${port} `)
});