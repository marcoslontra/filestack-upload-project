// frontend/script.js
document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Enviando arquivo...</p>';

    try {
        // Obter a chave da API do Filestack
        const response = await fetch('/api/filestack-key');
        const data = await response.json();
        const apiKey = data.apiKey;

        // Inicializar o cliente Filestack
        const client = filestack.init(apiKey);

        // Pegar o arquivo selecionado
        const file = document.getElementById('fileUpload').files[0];
        
        // Upload do arquivo para o Filestack
        const uploadResult = await client.upload(file);
        
        resultDiv.innerHTML = `<p style="color: green;">Arquivo enviado com sucesso! <a href="${uploadResult.url}" target="_blank">Visualizar arquivo</a></p>`;
    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = `<p style="color: red;">Erro ao enviar o arquivo: ${error.message}</p>`;
    }
});
