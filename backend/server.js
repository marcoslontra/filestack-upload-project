// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Permitir qualquer origem durante o desenvolvimento
app.use(cors());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota para retornar a chave da API do Filestack
app.get('/api/filestack-key', (req, res) => {
  res.json({ apiKey: 'ApgANrOfTOWJBXY2mERX1z' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
