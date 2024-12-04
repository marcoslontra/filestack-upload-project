require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Configuração do servidor Express
const app = express();
const port = process.env.PORT || 3000;

// Permitir qualquer origem durante o desenvolvimento
app.use(cors({
    origin: '*',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
}));

// Rota para fornecer a chave do Filestack
app.get('/api/filestack-key', (req, res) => {
    // Retorne a chave Filestack diretamente ou de um arquivo de ambiente
    res.json({ key: 'ApgANrOfTOWJBXY2mERX1z' });
});

// Rota de exemplo para upload ou outras operações
app.post('/upload', (req, res) => {
    // Lógica de upload de arquivos
    res.send('Upload feito com sucesso!');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
