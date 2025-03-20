const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Para servir os arquivos HTML e CSS

// Rota para executar comandos no terminal do servidor
app.post("/executar", (req, res) => {
    const { comando } = req.body;

    exec(comando, (erro, stdout, stderr) => {
        if (erro) {
            return res.json({ saida: `Erro: ${stderr}` });
        }
        res.json({ saida: stdout });
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
