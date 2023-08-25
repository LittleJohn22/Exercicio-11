//index.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";   

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import roteadorUsuario from "./routes/usuario.js";
import loginRouter from "./routes/login.js";

app.use(roteadorUsuario);
app.use(loginRouter);

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "John Lucas Ferreira Rodrigues",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});