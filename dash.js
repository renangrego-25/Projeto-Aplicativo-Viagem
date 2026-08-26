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

document.getElementById('mypass').addEventListener('click', () =>{

    const pass = document.getElementById('pass');
    const closeCardP = document.getElementById('closecardP');

    pass.classList.add('active');

    closeCardP.addEventListener('click', () =>{

        pass.classList.remove('active');
    })
})

document.getElementById('myhosp').addEventListener('click', () =>{

    const hosp = document.getElementById('hosp');
    const closeCardH = document.getElementById('closecardH');

    hosp.classList.add('active');

    closeCardH.addEventListener('click', () =>{

        hosp.classList.remove('active');
    })
})

document.getElementById('mytour').addEventListener('click', () =>{

    const tour = document.getElementById('tour');
    const closeCardT = document.getElementById('closecardT');

    tour.classList.add('active');

    closeCardT.addEventListener('click', () =>{

        tour.classList.remove('active');
    })
})