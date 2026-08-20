window.addEventListener('DOMContentLoaded', () => {
    const nome = localStorage.getItem('nomeUsuario');

    if (nome){
        document.getElementById('saudacao').textContent = `Olá ${nome}`;
    } else {
        window.location.href = 'login.html';
    }
});

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

//Página de Minha Viagem

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

