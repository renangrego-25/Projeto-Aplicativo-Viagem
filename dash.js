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



