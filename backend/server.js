const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// Configuração do Filestack
const filestack = require('filestack-js');
const client = filestack.init('ApgANrOfTOWJBXY2mERX1z');

// Configurações de middleware
app.use(express.static('public'));
app.use(fileUpload());

// Rota para receber o upload do PDF
app.post('/upload-pdf', (req, res) => {
    if (!req.files || !req.files.pdf) {
        return res.status(400).send('Nenhum arquivo PDF foi enviado.');
    }

    const pdfFile = req.files.pdf;

    // Enviar o PDF para o Filestack
    client.upload(pdfFile.data)
        .then(result => {
            res.send({ fileUrl: result.url });
        })
        .catch(err => {
<<<<<<< HEAD
            res.status(500).send(err);
=======
            res.status(500).send('Erro ao carregar arquivo no Filestack: ' + err);
>>>>>>> f0d75a9245f0dbd38e931dc38e51b7bb4adfe9d3
        });
});

// Rota para receber os dados do formulário e convertê-los para TXT
app.post('/upload-txt', (req, res) => {
    const { nome, telefone, dataNascimento, estadoCivil, possuiFilhos, rendaBruta, possuiImovel, trabalho3Anos } = req.body;
    
<<<<<<< HEAD
    let txtData = `
        Nome Completo: ${nome}
        Telefone: ${telefone}
        Data de Nascimento: ${dataNascimento}
        Estado Civil: ${estadoCivil}
        Possui Filhos: ${possuiFilhos}
        Renda Bruta Casal: ${rendaBruta}
        Possui Imóvel: ${possuiImovel}
        Trabalho de 3 anos: ${trabalho3Anos}
    `;
=======
    let txtData = `Nome Completo: ${nome}
Telefone: ${telefone}
Data de Nascimento: ${dataNascimento}
Estado Civil: ${estadoCivil}
Possui Filhos: ${possuiFilhos}
Renda Bruta Casal: ${rendaBruta}
Possui Imóvel: ${possuiImovel}
Trabalho de 3 anos: ${trabalho3Anos}`;
>>>>>>> f0d75a9245f0dbd38e931dc38e51b7bb4adfe9d3
    
    const blob = new Blob([txtData], { type: 'text/plain' });
    const file = new File([blob], "informacoes.txt", { type: 'text/plain' });

    // Enviar o arquivo TXT para o Filestack
    client.upload(file)
        .then(result => {
            res.send({ fileUrl: result.url });
        })
        .catch(err => {
<<<<<<< HEAD
            res.status(500).send(err);
=======
            res.status(500).send('Erro ao carregar arquivo no Filestack: ' + err);
>>>>>>> f0d75a9245f0dbd38e931dc38e51b7bb4adfe9d3
        });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
