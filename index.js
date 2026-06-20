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