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
const exitConfig = document.getElementById('exitconfig')

function abrirLogout(e) {
    e.preventDefault();
        logout.classList.add('active');
}

exit.addEventListener('click', abrirLogout);
exitConfig.addEventListener('click', abrirLogout);

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



function SendQuestion() {

    var sQuestion = inputQuestion.value;

    fetch("/api/proxy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: sQuestion })
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

//página de documentos

document.addEventListener('DOMContentLoaded', () => {
  const map = {
    docperson: 'carddoc',
    docpersoncar: 'cardcar',
    docpersonpass: 'cardpass',
    docpersonvac: 'cardvac'
  };
  

  Object.entries(map).forEach(([cardId, panelId]) => {
    const card = document.getElementById(cardId);
    const panel = document.getElementById(panelId);
    const closeCard = document.querySelectorAll('.closedoc');

    if (!card || !panel) return;

    card.addEventListener('click', () => {
      const isActive = panel.classList.contains('active');


      Object.values(map).forEach(id => {
        document.getElementById(id)?.classList.remove('active');
      });

      if (!isActive) {
        panel.classList.add('active');
      }
    });
  });
  document.querySelectorAll('.closedoc').forEach(link => {
  link.addEventListener('click', () => {
    link.closest('.cardopen')?.classList.remove('active');
  });
});
});

// Salvar docs

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cardopen').forEach(panel => {
    const panelId = panel.id; // ex: 'cardvac'
    const storageKey = `doc_${panelId}`;

    const input = panel.querySelector('input[type="file"]');
    const btnSalvar = panel.querySelector('.btn-salvar');
    const btnApagar = panel.querySelector('.btn-apagar');
    const loadDiv = panel.querySelector('.load');
    const showDiv = panel.querySelector('.showdocload');

    // Ao carregar a página, restaura o que já foi salvo
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const { name } = JSON.parse(saved);
      showDiv.innerHTML = `<p>${name}</p>`;
      loadDiv.classList.add('active');
    }

    // Salvar novo arquivo
    btnSalvar.addEventListener('click', () => {
      const file = input.files[0];
      if (!file) {
        alert('Selecione um arquivo primeiro.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result; // base64
        localStorage.setItem(storageKey, JSON.stringify({
          name: file.name,
          data: dataUrl
        }));

        showDiv.innerHTML = `<p>${file.name}</p>`;
        loadDiv.classList.add('active');
        input.value = '';
      };
      reader.readAsDataURL(file);
    });

    btnApagar.addEventListener('click', () => {
      localStorage.removeItem(storageKey);
      showDiv.innerHTML = '';
      loadDiv.classList.remove('active');
    });
  });
});

//Página de itinerário

document.addEventListener("DOMContentLoaded", () => {

    const itinerary = document.getElementById('itinerary');
    const btnAddIt = document.getElementById('additinerary');
    const localItinInput = document.getElementById('Localitin');
    const dateItiInput = document.getElementById('dateiti');
    const listaitinerario = document.getElementById('listaitinerario');

    carregarItinerario();

    btnAddIt.addEventListener('click', () => {
        adicionarItine();
    });

    function adicionarItine() {

        const textoIt = itinerary.value.trim();
        const textoLocal = localItinInput.value.trim();
        const textoDate = dateItiInput.value.trim();

        if (textoIt === "" || textoLocal === "" || textoDate === "") {
            alert("Preencha todos os campos");
            return;
        }

        criarCardItine(textoIt, textoLocal, textoDate);

        // limpa os campos após adicionar
        itinerary.value = "";
        localItinInput.value = "";
        dateItiInput.value = "";

        salvarItinerario();
    }

    function criarCardItine(textoIt, textoLocal, textoDate, concluida = false) {

        const cardIti = document.createElement("div");
        cardIti.className = "itinerary-item";

        const nomeiti = document.createElement("h3");
        nomeiti.className = "nomeiti";
        nomeiti.textContent = textoIt;

        const localiti = document.createElement("h3");
        localiti.className = "localiti";
        localiti.textContent = textoLocal;

        const dateiti = document.createElement("h3");
        dateiti.className = "dateiti";
        dateiti.textContent = textoDate;

        if (concluida) {
            nomeiti.style.textDecoration = "line-through";
            nomeiti.style.opacity = "0.6";
            cardIti.style.backgroundImage = "linear-gradient(to right, #0e7e21, #7cc99f)";
        }

        const btnItiConcluida = document.createElement("button");
        btnItiConcluida.className = "iticoncluida";
        btnItiConcluida.innerHTML = concluida
            ? '<img width="48" height="48" src="https://img.icons8.com/ios-filled/50/process.png" alt="process"/>'
            : '<img width="48" height="48" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check-mark-button-emoji"/>';

        const btnItiExcluir = document.createElement("button");
        btnItiExcluir.className = "excluir";
        btnItiExcluir.innerHTML = '<img width="48" height="48" src="https://img.icons8.com/color/48/close-window.png" alt="close-window"/>';

        btnItiConcluida.addEventListener('click', () => {
            const feita = nomeiti.style.textDecoration === "line-through";

            cardIti.style.backgroundImage = feita
                ? "linear-gradient(to right, #0e287e, #7c84c9)"
                : "linear-gradient(to right, #0e7e21, #7cc99f)";

            nomeiti.style.textDecoration = feita ? "none" : "line-through";
            nomeiti.style.opacity = feita ? "1" : "0.6";

            btnItiConcluida.innerHTML = feita
                ? '<img width="48" height="48" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check-mark-button-emoji"/>'
                : '<img width="48" height="48" src="https://img.icons8.com/ios-filled/50/process.png" alt="process"/>';

            salvarItinerario();
        });

        btnItiExcluir.addEventListener('click', () => {
            cardIti.remove();
            salvarItinerario();
        });

        cardIti.appendChild(nomeiti);
        cardIti.appendChild(localiti);
        cardIti.appendChild(dateiti);
        cardIti.appendChild(btnItiConcluida);
        cardIti.appendChild(btnItiExcluir);

        listaitinerario.appendChild(cardIti);
    }

    function salvarItinerario() {
        const itinerario = [];

        document.querySelectorAll("#listaitinerario > div").forEach((card) => {
            const nome = card.querySelector(".nomeiti");
            const local = card.querySelector(".localiti");
            const data = card.querySelector(".dateiti");

            itinerario.push({
                texto: nome.textContent,
                local: local.textContent,
                data: data.textContent,
                concluida: nome.style.textDecoration === "line-through",
            });
        });

        localStorage.setItem("itinerario", JSON.stringify(itinerario));
    }

    function carregarItinerario() {
        const salvos = JSON.parse(localStorage.getItem("itinerario") || "[]");
        salvos.forEach((t) => criarCardItine(t.texto, t.local, t.data, t.concluida));
    }
});

document.getElementById('Itinerário').addEventListener('click', () => {
    
    const itiopen = document.getElementById('itineraryopen');
    const itivoltar = document.getElementById('itivoltar');

    itiopen.classList.add('active');

    itivoltar.addEventListener('click', () => {
        itiopen.classList.remove('active');
    })
})


//página de config

const connection = document.getElementById('connection');
const central = document.getElementById('central');
const erroPage = document.getElementById('erropage');
const data = document.getElementById('mydata');

const btnErroPage = document.getElementById('btnerropage').addEventListener('click', ()=>{
    erroPage.classList.remove('active');
})

function erropage(){
    erroPage.classList.add('active');
}

connection.addEventListener('click', erropage);
central.addEventListener('click', erropage);
data.addEventListener('click', erropage);


//conversor de moeda

const form = document.getElementById('convertorform');
const amount = document.getElementById('amount');
const fromCurrency = document.getElementById('fromcurrency');
const convertedAmount = document.getElementById('convertedAmount');
const toCurrency = document.getElementById('tocurrency');
const loading = document.querySelector('.loading');
const resultConv = document.querySelector('.result');
const error = document.querySelector('.error');
const converterBtn = document.getElementById('converterBtn');


const API_URL = "https://api.exchangerate-api.com/v4/latest/";


async function convertMoney(){

    loading.style.display = "block";
    error.style.display = "none";
    resultConv.style.display = "none";

    console.log(API_URL + fromCurrency.value);

    try{
        const response = await fetch(API_URL + fromCurrency.value);
        const dataConv = await  response.json()

        const rate = dataConv.rates[toCurrency.value];
        const convertedRate = (amount.value * rate);

        convertedAmount.value = convertedRate;

        resultConv.style.display = "block";
        loading.style.display = "none"

        resultConv.innerHTML = `
        <div style="font-size: 1.4rem">
            ${amount.value} ${fromCurrency.value} = ${convertedAmount.value} ${toCurrency.value}</div>
            <div style="font-size: 0.9rem; opacity: 0;">
            Taxa: 1 ${fromCurrency.value} = ${rate} ${toCurrency.value}
            </div>`;
            
        console.log("valor convertido");
    }
    catch(err){
        console.error(error);
        error.style.display = "block";
        error.style.margin = "10px";
        error.innerHTML = `Erro ao carregar cotação`;
        loading.style.display = "none";
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    convertMoney()
})