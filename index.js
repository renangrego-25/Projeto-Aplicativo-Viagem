console.log('arquivo carregado')

const SENHA_CORRETA = "travs123";

document.getElementById('btnEntrar').addEventListener('click', function(e) {
    e.preventDefault();

    console.log('1. formulário capturado');

    const nome = document.getElementById('inputname').value;
    const senha = document.getElementById('inputpassword').value;
    const erro = document.getElementById('erro');

    console.log('2. nome:', nome, '| senha:', senha);

    if (senha === SENHA_CORRETA) {
        localStorage.setItem('nomeUsuario', nome);
        window.location.href = '../pages/dashboard.html';
    } else{
        console.log('3. senha incorreta');
        erro.style.display = 'block';
    }
});

const CÓDIGO_CORRETO = "1592648";

document.getElementById('btnEntrar').addEventListener('click', function(e){
    e.preventDefault();

    const nomet = document.getElementById('inputname2').value;
    const cpf = document.getElementById('inputdoc').value;
    const code = document.getElementById('inputcode').value;

    if(code === CÓDIGO_CORRETO){
        localStorage.setItem('nomeUsuario', nomet);
        window.location.href = '../pages/dashboard.html';
    } else{
        erro.style.display = 'block';
    }
});

function toggleAccordion() {
    const content = document.getElementById('card-content');
    const arrow = document.getElementById('arrow-icon');

    content.classList.toggle('open');
    arrow.classList.toggle('rotate');

}

document.getelementById('fileupload').addEventListener('change', function(){
    const fileNameDisplay = document.getElementById('file-name');
    if (this.files && this.files.length > 0) {
        fileNameDisplay.textContent = this.files.length === 1 
      ? this.files[0].name 
      : `${this.files.length} arquivos selecionados`;
  } else {
    fileNameDisplay.textContent = "Nenhum arquivo selecionado";
  }
});

function saveFiles() {
  const fileInput = document.getElementById('file-upload');
  if (fileInput.files.length === 0) {
    alert('Por favor, selecione pelo menos um arquivo antes de salvar.');
    return;
  }
  
  // Aqui entraria o seu fetch ou upload para o servidor
  alert('Arquivos prontos para serem salvos!');
  console.log(fileInput.files);
}