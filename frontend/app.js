const client = filestack.init('ApgANrOfTOWJBXY2mERX1z'); // Sua chave API do Filestack

document.getElementById('documents').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file && file.type === 'application/pdf') {
    client.upload(file).then(result => {
      console.log('Arquivo carregado com sucesso:', result);
    }).catch(error => {
      console.error('Erro no upload:', error);
    });
  }
});

document.getElementById('upload-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;

  // Enviar os dados para o servidor ou outro processamento aqui

  alert('Formulário enviado com sucesso!');
});
