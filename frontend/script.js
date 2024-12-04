document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Enviando arquivo...</p>';

    try {
        // Obter a chave da API do Filestack
        const response = await fetch('/api/filestack-key');
        if (!response.ok) {
            throw new Error('Erro ao buscar a chave da API do Filestack');
        }
        const data = await response.json();
        const apiKey = data.key;  // Ajuste para usar a chave corretamente

        // Inicializar o cliente Filestack
        const client = filestack.init(apiKey);

        // Pegar o arquivo selecionado
        const file = document.getElementById('fileUpload').files[0];
        if (!file) {
            resultDiv.innerHTML = '<p style="color: red;">Por favor, selecione um arquivo para fazer o upload.</p>';
            return;
        }

        // Upload do arquivo para o Filestack
        const uploadResult = await client.upload(file);

        resultDiv.innerHTML = `<p style="color: green;">Arquivo enviado com sucesso! <a href="${uploadResult.url}" target="_blank">Visualizar arquivo</a></p>`;
    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = `<p style="color: red;">Erro ao enviar o arquivo: ${error.message}</p>`;
    }
});
