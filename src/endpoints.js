import { Router } from 'express';

const server = Router();


//http://localhost:5000/ping
server.get('/ping', (req, resp) => {
    resp.send('pong');
})


//http://localhost:5000/dobro/40
server.get('/dobro/:numero', (req, resp) => {
    const numero = Number(req.params.numero);
    const dobro = numero * 2;

    
    resp.send({
        dobro:dobro
    });
})


//http://localhost:5000/somar?a=20&b=30
server.get('/somar', (req, resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const x = a + b;

    resp.send({
        soma: x
    })
}); 


//http://localhost:5000/somar 
//{
//  "a":15,
//  "b":20
//}
server.post('/somar', (req, resp) => {
    try{
    const { valores:{ a , b }} = req.body;
    

    const x = a + b;

    resp.send({
        soma: x
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
});


export default server;