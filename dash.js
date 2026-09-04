window.addEventListener('DOMContentLoaded', () => {
    const nome = localStorage.getItem('nomeUsuario');

    if (nome){
        document.getElementById('saudacao').textContent = `Olá ${nome}`;
    } else {
        window.location.href = 'login.html';
    }
});

// carrosel dashboard

const inner = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const cards = inner.querySelectorAll('.card');
const totaldiv = inner.children.length;

let index = 0;

function updateCarousel() {
    const carWidth = cards[0].offsetWidth;
    inner.style.transform = `translateX(${-index * carWidth}px)`;
}

next.addEventListener('click', () => {
    index = (index + 1) % totaldiv;
    updateCarousel();
});

prev.addEventListener('click', () => {
  index = (index - 1 + totaldiv) % totaldiv;
  updateCarousel();
});

//Página de Minha Viagem - acesso

const allItens = document.getElementById('allitens');
const myTravelOpen = document.getElementById('mytravelopen');
const myTravel = document.getElementById('mytravel');

myTravel.addEventListener('click', (e) => {
    e.preventDefault();

    allItens.classList.add('hidden');
    myTravelOpen.classList.add('active');
    myTravelOpen.classList.remove('hidden');
})

const voltar = document.getElementById ('voltar');

voltar.addEventListener('click', (e) => {
    e.preventDefault();

    allItens.classList.remove('hidden');
    myTravelOpen.classList.add('hidden');
    myTravelOpen.classList.remove('active');
})

// Botão de sair

const exit = document.getElementById('exit');
const logout = document.getElementById('logout');

exit.addEventListener('click', (e) => {
    e.preventDefault();

    logout.classList.add('active');
    
})

const cancel = document.getElementById('cancel');

cancel.addEventListener('click', (e) => {
    e.preventDefault

    logout.classList.remove('active');
})

const exitSure = document.getElementById('yesSure');

exitSure.addEventListener('click', (e) => {
    e.preventDefault;

    window.location.href = '../index.html'
})

//Card para adicionar data de viagem

const addTravel = document.getElementById('add');
const cardTravel = document.getElementById('cardTravel');
const closeCard = document.getElementById('closecard');

addTravel.addEventListener('click', (e) =>{
    e.preventDefault;

    cardTravel.classList.add('active');
})

closeCard.addEventListener('click', (e) => {
    e.preventDefault;

    cardTravel.classList.remove('active');
})


document.getElementById('savedate').addEventListener('click', function() {
    const dateTravel = document.getElementById('data').value;
    const hourTravel = document.getElementById('hora').value;
    const locationTravel = document.getElementById('Local').value;
    const erroSave = document.getElementById('errosave');
    const nextTravel = document.getElementById('nexttravel');
    
    localStorage.setItem('dataViagem', dateTravel);
    localStorage.setItem('horaViagem', hourTravel);
    localStorage.setItem('localViagem', locationTravel);

    if(locationTravel === '' || dateTravel === '' || hourTravel === ''){
        erroSave.style.display = 'block';
    } else {
        cardTravel.classList.remove('active');
        erroSave.style.display = 'none';
        addTravel.classList.add('hidden');
        nextTravel.classList.add('active');
    }
    console.log('Dados salvos!' , { dateTravel, hourTravel, locationTravel });

    
    if(dateTravel && hourTravel && locationTravel){
        document.getElementById('daten').textContent = `Dia ${dateTravel}`;
        document.getElementById('hourn').textContent = `às ${hourTravel}`;
        document.getElementById('locationn').textContent = `Para ${locationTravel}`;
    }

});

document.getElementById('pinceledit').addEventListener('click', (e) =>{
        e.preventDefault;
        
        cardTravel.classList.add('active');
    })

// Página passagens
document.getElementById('mypassinicial').addEventListener('click', (e)=>{
    e.preventDefault

    const pass = document.getElementById('pass');
    const closeCardP = document.getElementById('closecardP');

    pass.classList.add('active');

    closeCardP.addEventListener('click', () =>{

        pass.classList.remove('active');
    })
})

document.getElementById('mypass').addEventListener('click', () =>{

    const pass = document.getElementById('pass');
    const closeCardP = document.getElementById('closecardP');

    pass.classList.add('active');

    closeCardP.addEventListener('click', () =>{

        pass.classList.remove('active');
    })
})

document.getElementById('btnsavepass').addEventListener('click', ()=>{

    const docpass = document.getElementById('docpass').value;
    const datepass = document.getElementById('datepass').value;
    const localpass = document.getElementById('localpass').value;
    const erropass = document.getElementById('erropass');
    const itenspass = document.getElementById('itenspass');
    const showdocone = document.getElementById('showdocone');


    localStorage.setItem('docpass', docpass);
    localStorage.setItem('datepass', datepass);
    localStorage.setItem('localpass', localpass);

    if(docpass === '' || datepass === '' || localpass === ''){
        erropass.style.display = 'block';
    }else{
        itenspass.classList.add('hidden');
        showdocone.classList.add('active');
        erropass.style.display = 'none';
    }

    if(docpass && datepass && localpass){
        document.getElementById('showdocpass').textContent = `${docpass}`;
        document.getElementById('horapass').textContent = `ÀS ${datepass}`;
        document.getElementById('locationpass').textContent = `EM ${localpass}`
    };

    document.getElementById('editpass').addEventListener('click', () =>{

        itenspass.classList.remove('hidden');
        showdocone.classList.remove('active');
    })

    document.getElementById('deletepass').addEventListener('click', () =>{

        itenspass.classList.remove('hidden');
        showdocone.classList.remove('active');

        docpass.value = ''; 
        datepass.value = '';
        localpass.value = '';

    })
});




// Página Hospedagem 
document.getElementById('myhospinicial').addEventListener('click', (e)=>{
    e.preventDefault

    const hosp = document.getElementById('hosp');
    const closeCardH = document.getElementById('closecardH');

    hosp.classList.add('active');

    closeCardH.addEventListener('click', () =>{

        hosp.classList.remove('active');
    });
});

document.getElementById('myhosp').addEventListener('click', () =>{

    const hosp = document.getElementById('hosp');
    const closeCardH = document.getElementById('closecardH');

    hosp.classList.add('active');

    closeCardH.addEventListener('click', () =>{

        hosp.classList.remove('active');
    })
})

document.getElementById('btnsavehosp').addEventListener('click', ()=>{

    const dochosp = document.getElementById('dochosp').value;
    const datehosp = document.getElementById('datehosp').value;
    const localhosp = document.getElementById('localhosp').value;
    const errohosp = document.getElementById('errohosp');
    const itenshosp = document.getElementById('itenshosp');
    const showdoctwo = document.getElementById('showdoctwo');


    localStorage.setItem('dochosp', dochosp);
    localStorage.setItem('datehosp', datehosp);
    localStorage.setItem('localhosp', localhosp);

    if(dochosp === '' || datehosp === '' || localhosp === ''){
        errohosp.style.display = 'block';
    }else{
        itenshosp.classList.add('hidden');
        showdoctwo.classList.add('active');
        errohosp.style.display = 'none';
    }

    if(dochosp && datehosp && localhosp){
        document.getElementById('showdochosp').textContent = `${dochosp}`;
        document.getElementById('horahosp').textContent = `ÀS ${datehosp}`;
        document.getElementById('locationhosp').textContent = `EM ${localhosp}`
    };

    document.getElementById('edithosp').addEventListener('click', () =>{

        itenshosp.classList.remove('hidden');
        showdoctwo.classList.remove('active');
    })

    document.getElementById('deletehosp').addEventListener('click', () =>{

        itenshosp.classList.remove('hidden');
        showdoctwo.classList.remove('active');

        dochosp.value = ''; 
        datehosp.value = '';
        localhosp.value = '';

    })
});

// Página passeios

document.getElementById('mytourinicial').addEventListener('click', (e)=>{
    e.preventDefault

    const tour = document.getElementById('tour');
    const closeCardT = document.getElementById('closecardT');

    tour.classList.add('active');

    closeCardT.addEventListener('click', () =>{

        tour.classList.remove('active');
    });
});

document.getElementById('mytour').addEventListener('click', () =>{

    const tour = document.getElementById('tour');
    const closeCardT = document.getElementById('closecardT');

    tour.classList.add('active');

    closeCardT.addEventListener('click', () =>{

        tour.classList.remove('active');
    })
})

document.getElementById('btnsavetour').addEventListener('click', ()=>{

    const doctour = document.getElementById('doctour').value;
    const datetour = document.getElementById('datetour').value;
    const localtour = document.getElementById('localtour').value;
    const errotour = document.getElementById('errotour');
    const itenstour = document.getElementById('itenstour');
    const showdocthree = document.getElementById('showdocthree');
    

    localStorage.setItem('doctour', doctour);
    localStorage.setItem('datetour', datetour);
    localStorage.setItem('localtour', localtour);

    if(doctour === '' || datetour === '' || localtour === ''){
        errotour.style.display = 'block';
    }else{
        itenstour.classList.add('hidden');
        showdocthree.classList.add('active');
        errotour.style.display = 'none';
    }

    if(doctour && datetour && localtour){
        document.getElementById('showdoctour').textContent = `${doctour}`;
        document.getElementById('horatour').textContent = `ÀS ${datetour}`;
        document.getElementById('locationtour').textContent = `EM ${localtour}`
    };

    document.getElementById('edittour').addEventListener('click', () =>{

        itenstour.classList.remove('hidden');
        showdocthree.classList.remove('active');
    })

    document.getElementById('deletetour').addEventListener('click', () =>{

        itenstour.classList.remove('hidden');
        showdocthree.classList.remove('active');

        doctour.value = ''; 
        datetour.value = '';
        localtour.value = '';

    })
});

//Página da IA

const inputQuestion = document.getElementById('inputQuestion');
const result = document.getElementById('result');
const suggestion = document.getElementById('suggestion');
const btnSendIA = document.getElementById('sendtoAI');

btnSendIA.addEventListener('click', () => {

    if (inputQuestion.value) {
        SendQuestion();
        suggestion.classList.add('hidden');
    }
})

inputQuestion.addEventListener('keypress', (e) => {

    
    if (inputQuestion.value && e.key === "Enter") {
        SendQuestion();
        suggestion.classList.add('hidden');
    }

});

const questionOne = document.getElementById('questionone');
const questionTwo = document.getElementById('questiontwo');
const questionThree = document.getElementById('questionthree');

questionOne.addEventListener('click', (e) => {
    e.preventDefault;

    inputQuestion.textContent = `${questionOne.textContent}`;
    suggestion.classList.add('hidden');
});

questionTwo.addEventListener('click', (e) => {
    e.preventDefault;

    inputQuestion.textContent = `${questionTwo.textContent}`;
    suggestion.classList.add('hidden');
})

questionThree.addEventListener('click', (e) => {
    e.preventDefault;

    inputQuestion.textContent = `${questionThree.textContent}`;
    suggestion.classList.add('hidden');
})

const GEMINI_API_KEY = "";

function SendQuestion() {

    var sQuestion = inputQuestion.value;

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=" + GEMINI_API_KEY, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            system_instruction: {
                parts: [
                    {text: "Você é Travs, um assistente de IA para viagens e dúvidas relacionadas a este assunto, seja simpático e objetivo. Apresente as informações de maneira direta e prática. Qualquer dúvida fora deste padrão retorne que você não é preparado para este assunto e solicite outra pergunta. Evite usar emojis e elementos que não sejam números e letras."}
                ]
            },
            contents: [
                {
                    parts: [
                        { text: sQuestion }
                    ]
                }
            ],
            generationConfig: {
                thinkingConfig: {
                    thinkingBudget: 1
            }
        }
        })

    })

    .then((response) => response.json())

    .then((json) => {

        if (result.value) {
            result.value += "\n\n";
        }

        if (json.error?.message) {

            result.value += `Error: ${json.error.message}`;

        } else if (json.candidates?.[0]?.content?.parts?.[0]?.text) {

            result.value += "Travs: " + json.candidates[0].content.parts[0].text;

        } else {

            result.value += "Sem resposta.";

        }

        result.scrollTop = result.scrollHeight;

    })

    .catch((error) => {

        console.error("Error:", error);

        result.value += "\nErro ao conectar com a IA.";

    })

    .finally(() => {

        inputQuestion.value = "";
        inputQuestion.disabled = false;
        inputQuestion.focus();

    });


    if (result.value) {
        result.value += "\n\n";
    }

    result.value += `Eu: ${sQuestion}`;

    inputQuestion.value = "Carregando...";
    inputQuestion.disabled = true;

}


//

document.getElementById('IA').addEventListener('click', (e)=>{
    e.preventDefault;

    const IAopen = document.getElementById('IAopen');

    IAopen.classList.add('active');
    const IAvoltar = document.getElementById('IAvoltar').addEventListener('click', ()=> {

        IAopen.classList.remove('active');
    })
})

// Página checklist

document.addEventListener("DOMContentLoaded", ()=>{

    const inputTarefa = document.getElementById('tarefa');
    const btnAdd = document.getElementById('addtarefa');
    const listaTarefas = document.getElementById('listatarefas');


    carregarTarefas();

    btnAdd.addEventListener('click', () => {
        adicionarTarefa();
    });

    function adicionarTarefa(){

        const texto = inputTarefa.value.trim();

        if(texto === "") {
            alert("Digite algo antes de adicionar");
            return;
        }

        criarCardTarefa(texto);
        inputTarefa.value = "";
        inputTarefa.focus();


        salvarTarefas();
    }

    function criarCardTarefa(texto, concluida = false) {

        const card = document.createElement("div");
        card.className = "tarefa";

        const nome = document.createElement("h2");
        nome.className = "nometarefa";
        nome.textContent = texto;

        if (concluida) {
            nome.style.textDecoration = "line-through";
            nome.style.opacity = "0.6";
        }

        const btnConcluida = document.createElement("button");
        btnConcluida.className = "concluida";
        btnConcluida.innerHTML = concluida ? '<img width="48" height="48" src="https://img.icons8.com/ios-filled/50/process.png" alt="process"/>' : '<img width="48" height="48" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check-mark-button-emoji"/>';

        const btnExcluir = document.createElement("button");
        btnExcluir.className = "excluir";
        btnExcluir.innerHTML = '<img width="48" height="48" src="https://img.icons8.com/color/48/close-window.png" alt="close-window"/>';

        btnConcluida.addEventListener('click', () => {
            const feita = nome.style.textDecoration === "line-through";
            card.style.backgroundImage = feita ? "linear-gradient(to right, #0e287e, #7c84c9)" : "linear-gradient(to right, #0e7e21, #7cc99f)"
            nome.style.textDecoration = feita ? "none" : "line-through";
            nome.style.opacity = feita ? "1" : "0.6";
            btnConcluida.innerHTML = feita ? '<img width="48" height="48" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check-mark-button-emoji"/>' : '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/process.png" alt="process"/>' ;
            salvarTarefas();
        })

        btnExcluir.addEventListener('click', () => {
            card.remove();
            salvarTarefas();
        });

        card.appendChild(nome);
        card.appendChild(btnConcluida);
        card.appendChild(btnExcluir);

        listaTarefas.appendChild(card);
    }


    function salvarTarefas() {
        const tarefas = [];
        document.querySelectorAll("#listatarefas .tarefa").forEach((card) => {
            const nome = card.querySelectorAll(".nometarefa");

            tarefas.push({
                texto: nome.textContent,
                concluida: nome.style.textDecoration === "line-through",
            });
        });

        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    function carregarTarefas() {
        const salvas = JSON.parse(localStorage.getItem("tarefas") || "[]");
        salvas.forEach((t) => criarCardTarefa(t.texto, t.concluida));
    }
});

document.getElementById('checklist').addEventListener('click', () => {

    const openCheck = document.getElementById('checklistopen');

    openCheck.classList.add('active');

    document.getElementById('Checkvoltar').addEventListener('click', () => {

        openCheck.classList.remove('active');
    })
})


// Navfixed 

const myDocs = document.getElementById('mydocuments');
const dashboard = document.getElementById('dashboard');
const configuration = document.getElementById('configuration');
const pagDocs = document.getElementById('savedocs');
const pagConfig = document.getElementById('config');

myDocs.addEventListener('click', (e) => {
    e.preventDefault;

    myDocs.classList.add('active');
    dashboard.classList.remove('active');
    configuration.classList.remove('active');
    pagDocs.classList.add('active');
    pagConfig.classList.remove('active');
})

configuration.addEventListener('click', (e) => {
    e.preventDefault;

    configuration.classList.add('active');
    pagConfig.classList.add('active');
    dashboard.classList.remove('active');
    myDocs.classList.remove('active');
    pagDocs.classList.remove('active');
})

dashboard.addEventListener('click', (e) => {
    e.preventDefault;

    dashboard.classList.add('active');
    configuration.classList.remove('active');
    myDocs.classList.remove('active');
    pagDocs.classList.remove('active');
    pagConfig.classList.remove('active');
})
