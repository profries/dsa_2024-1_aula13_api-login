const express = require('express');
const app = express();
const PORTA = 3000;


const loginController = require('./controller/login_controller');
const produtoRouter = require('./rotas/produto_rotas');
const middlewareAcesso = require('./middleware/acesso_middleware');

app.use(express.json()) // for parsing application/json

app.use((req, res, next) => {
    console.log(req.method+" "+req.originalUrl);
    next();
})

app.post("/api/login", loginController.realizarLogin);

app.use("/api/produtos", middlewareAcesso.verificarAcesso, produtoRouter);

app.listen(PORTA, ()=> {
    console.log("Iniciando o servidor na porta "+PORTA);
})
