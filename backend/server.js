require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');  // Para lidar com uploads de arquivos

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
    res.json({ key: 'ApgANrOfTOWJBXY2mERX1z' });  // Sua chave Filestack
});

// Configuração do armazenamento de arquivos com Multer
const uploadDir = path.join(__dirname, 'uploads');

// Verificar se o diretório de uploads existe, caso contrário, cria
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configuração de armazenamento com Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);  // Arquivos temporários armazenados localmente
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Renomeando arquivos para evitar duplicação
    }
});

const upload = multer({ storage: storage });

// Rota de upload de arquivos
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('Nenhum arquivo foi enviado!');
        }
        res.status(200).send('Upload feito com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao fazer upload: ' + error.message);
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
